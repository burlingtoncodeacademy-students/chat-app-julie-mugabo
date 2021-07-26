import { useState, useEffect } from "react";
import { styles } from "./styles";
import { useLocation } from "react-router-dom";
import { CssBaseline, Typography } from "@material-ui/core";

const ChatMess = (props) => {
  const [messages, setMessages] = useState([]);
  const [update, setUpdate] = useState(0);

  const location = useLocation();

  // setting fetch refresh rate to every ten seconds
  setInterval(() => setUpdate(update + 1), 10000);

  useEffect(() => {
    // get channel from restful path
    const channel = location.pathname.split("/")[4];

    // fetch channel messages
    fetch(`/messages/${channel}`)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        console.log(data);
      });

    /*fetch occurs every time update changes (currently 10 seconds)
    and when location (mapping to channel) changes
    */
  }, [update, location]);

  return (
    <>
      {/* CssBaseline resets page css to a consistent baseline for styling */}
      <CssBaseline />
      {/* importing styles for this component from the styles.js file */}
      <div style={styles.ChatMess}>
        {/* iterating through the messages to dynamically display them  */}
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
