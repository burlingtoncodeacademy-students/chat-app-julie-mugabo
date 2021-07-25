import { useState, useEffect } from 'react';
import { styles } from "./styles"
import { CssBaseline, Typography } from '@material-ui/core';

const ChatMess = (props) => {
  const [messages, setMessages] = useState([]);
  const [update, setUpdate] = useState(0);

  setInterval(() => setUpdate(update + 1), 10000);

  useEffect(() => {
    fetch('/messages')
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        console.log(data);
      });

    return () => {
      // cleanup;
    };
  }, [update]);

  return (
    <>
    <CssBaseline />
    <div style = {styles.ChatMess}>
      {messages.map((msg, index) => (
        <Typography key={index}>
          {msg.user}: {msg.body} ({msg.when})
        </Typography>
      ))}
      </div>
    </>
  );
};

export default ChatMess;
