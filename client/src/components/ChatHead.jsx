import { useLocation } from "react-router-dom"

const ChatHead = () => {

  let location = useLocation()

  let user = location.pathname.split("/").splice(-1).toString()

  return (
    <ul>
      <li>Hi {user}</li>
      <li>#General</li>
    </ul>
  );
};

export default ChatHead;
