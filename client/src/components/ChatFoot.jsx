import React from "react";
import { useLocation } from "react-router-dom";
import { TextField } from "@material-ui/core";

const ChatFoot = () => {
  /*set up to dynamically grab the user's name and the channel they are in 
to be reflected in the placeholder text of the message and to send along with our post*/
  let location = useLocation();

  let user = location.pathname.split("/")[2];
  let channel = location.pathname.split("/")[4];

  return (
    <>
    {/* action points to API endpoint /messages/:channel */}
      <form action={`/messages/${channel}`} method="POST">
        {/* MaterialUi component equivalent of text area, serving as chat message body for POST */}
        <TextField
          variant="outlined"
          placeholder={`Talk to #${channel} by typing your message and pressing ENTER`}
          name="message"
          style={{ width: "50vw" }}
        />
        {/* passing in user as hidden input for our POST */}
        <input type="hidden" value={user} name="user" />
      </form>
    </>
  );
};

export default ChatFoot;
