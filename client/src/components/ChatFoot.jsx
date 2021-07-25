import { useLocation } from "react-router-dom"

import { TextareaAutosize } from '@material-ui/core'

const ChatFoot = () => {

  let location = useLocation()

  let user = location.pathname.split("/").splice(-1).toString()
  
  return (
    <>
      <form action = "/send" method = "POST">
        <TextareaAutosize variant = "outlined" placeholder="Talk to #general" name = "message" style={{ width: "50vw" }}/>
        <input type = "hidden" value = {user} name = "user"/>
      </form>
      
    </>
  );
};

export default ChatFoot;
