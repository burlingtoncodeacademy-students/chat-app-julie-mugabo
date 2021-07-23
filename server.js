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
});

const Message = mongoose.model('Message', messageSchema);

// set error message
db.on('error', console.error.bind(console, 'conection error'));

app.post('/enter', (req, res) => {
  //setting user to the body of the request
  const { user } = req.body;

  res.redirect(`/chat/${user}`);
});

app.post('/send', (req, res) => {
  const { message, user } = req.body;

  let savedMsg = new Message({
    when: new Date().toISOString(),
    body: message,
    user: user,
  });

  savedMsg.save((err, doc) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(`Message sent: ${doc}`);
    }
  });
});

app.listen(port, () => {
  console.log('listening on port: ' + port);
});
