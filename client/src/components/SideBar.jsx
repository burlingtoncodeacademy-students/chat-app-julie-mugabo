import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat';
import ComputerIcon from '@material-ui/icons/Computer';
import PetsIcon from '@material-ui/icons/Pets';

const SideBar = () => {
  return (
    <List component="nav">
    <ListItem button>
      <ListItemAvatar>
        <Avatar>
          <ChatIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="General"/>
    </ListItem>
    <ListItem button>
      <ListItemAvatar>
        <Avatar>
          <ComputerIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Tech"/>
    </ListItem>
    <ListItem button>
      <ListItemAvatar>
        <Avatar>
          <PetsIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Pets"/>
    </ListItem>
  </List>
  );
};

export default SideBar;
