import SideBar from "./SideBar";
import ChatHead from "./ChatHead";
import ChatMess from "./ChatMess";
import ChatFoot from "./ChatFoot";

const Chat = () => {
  const compLayout = {
    display: "grid",
    gridTemplateColumns: "0.7fr 1.3fr 1fr",
    gridTemplateRows: "0.5fr 3fr 0.4fr",
    gridTemplateAreas: `
    'Sidebar ChatHead ChatHead'
    'Sidebar ChatMess ChatMess'
    'Sidebar ChatFoot ChatFoot'
    `
  };

  return (
    <>
      <div style={compLayout}>
        <SideBar style = {{gridArea: "Sidebar"}} />
        <ChatHead style = {{gridArea: "ChatHead"}}  />
        <ChatMess style = {{gridArea: "ChatMess"}} />
        <ChatFoot style = {{gridArea: "ChatFoot"}} />
      </div>
    </>
  );
};
export default Chat;
