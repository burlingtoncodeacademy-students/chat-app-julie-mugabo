require('dotenv').config(); //allows usage of .env to hold hidden variables
const express = require('express'); //importing express as server
const mongoose = require('mongoose'); //importing mongoose for database connection

const port = process.env.PORT || 8000;
const app = express();
//setting up static file serve, dependant on if we are in dev or production
const staticDir = process.env.DEV ? './client/public' : './client/build'; 
app.use(express.static(staticDir));

//allows server to read form data as formatted JSON object
app.use(express.urlencoded({ extended: true }));

// setup mongoose to point to Atlas cluster
const atlasDbUrl = `mongodb+srv://admin:${process.env.PASS}@cluster0.dspxo.mongodb.net/chatproject?retryWrites=true&w=majority`;
mongoose.connect(atlasDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//setting the db (database) variable to reference the mongoose connection to our database
const db = mongoose.connection;

//creating mongoose Schema to represent a chat message
const messageSchema = new mongoose.Schema({
  when: Date,
  body: String,
  user: String,
  channel: String,
});

//using our Schema to model Message
const Message = mongoose.model('Message', messageSchema);

// set error message
db.on('error', console.error.bind(console, 'connection error'));

//receives user name and channel name from Welcome page form
app.post('/enter', (req, res) => {
  //setting user to the body of the request
  const { user, channel } = req.body;

  //redirecting client page to Chat component route
  res.redirect(`/chat/${user}/channels/${channel}`);
});

// RESTful endpoint to send & save a message to a channel
app.post('/messages/:channel', (req, res) => {
  const { channel } = req.params; // get from endpoint path
  const { message, user } = req.body; // get from html form

  console.log('req', req);

 /*inputting req.params and req.body into an instance of Message model via assigned variables and setting date*/
  let savedMsg = new Message({
    when: new Date().toISOString(),
    body: message,
    user: user,
    channel: channel,
  });
//saving the savedMsg instance of Message model to the database
  savedMsg.save((err, doc) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(`Message sent: ${doc}`);
    }
  });

  // stay on the same user's chat by returning no content response
  res.status(204).send();
});

// get all messages for testing purposes
app.get('/messages', async (req, res) => {
  // get messages from db
  const messages = await Message.find({});

  // send message as json
  res.json(messages);
});

// RESTful endpoint to get all messages from a channel
app.get('/messages/:channel', async (req, res) => {
  let channel = req.params.channel;

  // get all messages from this channel
  const messages = await Message.find({ channel });

  // send messages as json
  res.json(messages);
});

//inform dev in console that server is starting + listening on correct port
app.listen(port, () => {
  console.log('listening on port: ' + port);
});
