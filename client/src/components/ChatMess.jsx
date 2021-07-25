import { useState, useEffect } from 'react';

const ChatMess = (props) => {
  const [messages, setMessages] = useState([]);
  const [update, setUpdate] = useState(0);

  // TODO change to 10 seconds  (curently on 5 minutes)
  setInterval(() => setUpdate(update + 1), 60000 * 5);

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
      {messages.map((msg, index) => (
        <p key={index}>
          {msg.user}: {msg.body} ({msg.when})
        </p>
      ))}
    </>
  );
};

export default ChatMess;
