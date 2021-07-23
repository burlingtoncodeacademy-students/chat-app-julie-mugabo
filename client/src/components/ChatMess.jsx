import { useState, useEffect } from 'react';

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
      {messages.map((msg, index) => (
        <p key={index}>
          {msg.user}: {msg.body} ({msg.when})
        </p>
      ))}
    </>
  );
};

export default ChatMess;
