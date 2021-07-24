import SideBar from "./SideBar";
import ChatHead from "./ChatHead";
import ChatMess from "./ChatMess";
import ChatFoot from "./ChatFoot";
import { Grid } from "@material-ui/core";
const Chat = () => {
  return (
    <>
      {/* setting the spacing between children in the container */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ChatHead />
        </Grid>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <ChatMess />
        </Grid>
        {/* empty Grid div to align ChatFoot with ChatMess */}
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <ChatFoot />
        </Grid>
      </Grid>
    </>
  );
};
export default Chat;
