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
        <Grid item xs={4} sm={3} md = {2} xl = {1}>
          <SideBar />
        </Grid>
        <Grid item xs={8} sm={9} md = {10} xl = {11}>
          <ChatMess />
        </Grid>
        {/* empty Grid div to align ChatFoot with ChatMess */}
        <Grid item xs={4} sm = {3} md = {2} xl = {1}></Grid>
        <Grid item xs={8} sm = {9} md = {10} xl = {11}>
          <ChatFoot />
        </Grid>
      </Grid>
    </>
  );
};
export default Chat;
