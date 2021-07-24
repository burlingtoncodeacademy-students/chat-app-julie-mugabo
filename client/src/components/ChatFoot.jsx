import { useLocation } from "react-router-dom"

const ChatFoot = () => {

  let location = useLocation()

  let user = location.pathname.split("/").splice(-1).toString()
  
  return (
    <>
      <form action = "/send" method = "POST">
        <input type="text" placeholder="Talk to #channel" name = "message" />
        <input type = "hidden" value = {user} name = "user"/>
      </form>
      
    </>
  );
};

export default ChatFoot;
