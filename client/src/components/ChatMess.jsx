import { useState, useEffect } from 'react';
import { styles } from './styles';
import { useLocation } from 'react-router-dom';
import { CssBaseline, Typography } from '@material-ui/core';

const ChatMess = (props) => {
  const [messages, setMessages] = useState([]);
  const [update, setUpdate] = useState(0);

  const location = useLocation();

  // TODO change to 10 seconds  (curently on 5 minutes)
  setInterval(() => setUpdate(update + 1), 60000 * 5);

  useEffect(() => {
    // get channel from restful path
    const channel = location.pathname.split('/')[4];

    // fetch channel messages
    fetch(`/messages/${channel}`)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        console.log(data);
      });

    return () => {
      // cleanup;
    };
  }, [update, location]);

  return (
    <>
      <CssBaseline />
      <div style={styles.ChatMess}>
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
