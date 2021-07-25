import {
  TextField,
  CssBaseline,
  Typography,
  Card,
  InputAdornment,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { styles } from './styles.js';

const Welcome = () => {
  return (
    <>
      <CssBaseline />
      <Card style={styles.Welcome}>
        <Typography variant='h1' style={styles.Welcome.H1}>
          Hi, welcome to WhoChats.
        </Typography>
        <Typography variant='h2' style={styles.Welcome.H2}>
          Are you ready to connect with a stranger?
        </Typography>
        <form method='POST' action='/enter'>
          <TextField
            variant='standard'
            type='text'
            name='user'
            placeholder='Name, press enter'
            style={{ backgroundColor: 'white' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle style={{ color: '#97CC04' }} />
                </InputAdornment>
              ),
            }}
          />
          <input type='hidden' value='general' name='channel' />
        </form>
      </Card>
    </>
  );
};

export default Welcome;
