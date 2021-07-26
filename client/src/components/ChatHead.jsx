import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

export default function ChatHead() {
  //set up to dynamically grab the user's name and the channel so they are reflected in the header
  let location = useLocation();

  let user = location.pathname.split('/')[2];
  let channel = location.pathname.split('/')[4];

  return (
    <>
    {/* AppBar is the equivalent of a wrapper div for this header component */}
      <AppBar position='static' style={{ background: '#2D7DD2' }}>
        {/* Toolbar is the container within the wrapper */}
        <Toolbar>
          {/* inserting an icon */}
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <EmojiPeopleIcon style={{ color: '#97CC04' }} />
          </IconButton>
          {/* Typography is the container for the welcome message */}
          <Typography variant='h6' style={{ marginRight: '65vw' }}>
            Welcome to WhoChats, {user}!
          </Typography>
          {/* Typography is the container for informing user of current channel */}
          <Typography color='inherit'>
            You are currently chatting in #{channel}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
