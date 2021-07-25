require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;
const app = express();
const staticDir = process.env.DEV ? './client/public' : './client/build';

app.use(express.static(staticDir));

app.use(express.urlencoded({ extended: true }));

// setup mongoose
const atlasDbUrl = `mongodb+srv://admin:${process.env.PASS}@cluster0.dspxo.mongodb.net/chatproject?retryWrites=true&w=majority`;
mongoose.connect(atlasDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const messageSchema = new mongoose.Schema({
  when: Date,
  body: String,
  user: String,
  channel: String,
});

const Message = mongoose.model('Message', messageSchema);

// set error message
db.on('error', console.error.bind(console, 'conection error'));

app.post('/enter', (req, res) => {
  //setting user to the body of the request
  const { user } = req.body;

  res.redirect(`/chat/${user}`);
});

// RESTful endpoint to send & save a message to a channel
app.post('/messages/:channel', (req, res) => {
  const { channel } = req.params; // get from endpoint path
  const { message, user } = req.body; // get from html form

  let savedMsg = new Message({
    when: new Date().toISOString(),
    body: message,
    user: user,
    channel: channel,
  });

  savedMsg.save((err, doc) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(`Message sent: ${doc}`);
    }
  });

  // stay on the same user's chat
  res.status(204).send();
});

// get all messages
app.get('/messages', async (req, res) => {
  // get messages from db
  const messages = await Message.find({});

  // send message as json
  res.json(messages);
});

// RESTful end point to get all messages from a channel
app.get('/messages/:channel', async (req, res) => {
  let channel = req.params.channel;

  // get all messages from this channel
  const messages = await Message.find({ channel });

  // send messages as json
  res.json(messages);
});

app.listen(port, () => {
  console.log('listening on port: ' + port);
});
