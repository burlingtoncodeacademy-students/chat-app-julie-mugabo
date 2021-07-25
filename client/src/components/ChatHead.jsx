import { useLocation } from "react-router-dom"
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

import { styles } from "./styles.js"

export default function ChatHead() {

  let location = useLocation()

  let user = location.pathname.split("/").splice(-1).toString()


  return (
    <>
    <AppBar position="static"  style={{ background: '#2D7DD2' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <EmojiPeopleIcon style={{ color: "#97CC04" }} />
        </IconButton>
        <Typography variant="h6" style={{ marginRight: "65vw" }}>
          Welcome to WhoChats, {user}!
        </Typography>
        <Typography color="inherit">You are currently chatting in #general</Typography>
      </Toolbar>
    </AppBar>
  </>
  );
};


