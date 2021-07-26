import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import ChatIcon from '@material-ui/icons/Chat';
import ComputerIcon from '@material-ui/icons/Computer';
import PetsIcon from '@material-ui/icons/Pets';

const SideBar = () => {
  const location = useLocation();
  let user = location.pathname.split('/')[2];

  return (
    <List component='nav'>
      <ListItem button component={Link} to={`/chat/${user}/channels/general`}>
        <ListItemAvatar>
          <Avatar>
            <ChatIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='General' />
      </ListItem>
      <ListItem button component={Link} to={`/chat/${user}/channels/tech`}>
        <ListItemAvatar>
          <Avatar>
            <ComputerIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Tech' />
      </ListItem>
      <ListItem button component={Link} to={`/chat/${user}/channels/pets`}>
        <ListItemAvatar>
          <Avatar>
            <PetsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Pets' />
      </ListItem>
    </List>
  );
};

export default SideBar;
