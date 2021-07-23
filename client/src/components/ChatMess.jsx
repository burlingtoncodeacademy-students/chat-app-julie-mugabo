import { useState, useEffect } from 'react';

const ChatMess = (props) => {
  const [messages, setMessages] = useState([]);

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
  }, []);

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
