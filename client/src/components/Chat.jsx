import SideBar from "./SideBar";
import ChatHead from "./ChatHead";
import ChatMess from "./ChatMess";
import ChatFoot from "./ChatFoot";
import { Grid } from "@material-ui/core";
const Chat = () => {
  return (
    <>
      {/* Grid container is the wrapper div that
      setting the spacing between children in the container */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* importing component ChatHead */}
          <ChatHead />
          {/* xs sm md xl are all dynamic values set to make the grid responsive to screen size */}
        </Grid>
        <Grid item xs={4} sm={3} md={2} xl={1}>
          {/* importing component Sidebar */}
          <SideBar />
        </Grid>
        {/* importing component ChatMess */}
        <Grid item xs={8} sm={9} md={10} xl={11}>
          <ChatMess />
        </Grid>
        {/* empty Grid div to align ChatFoot with ChatMess */}
        <Grid item xs={4} sm={3} md={2} xl={1}></Grid>
        <Grid item xs={8} sm={9} md={10} xl={11}>
          {/* importing component ChatFoot*/}
          <ChatFoot />
        </Grid>
      </Grid>
    </>
  );
};
export default Chat;
