import {
  TextField,
  CssBaseline,
  Typography,
  Card,
  InputAdornment,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { styles } from "./styles.js";

const Welcome = () => {
  return (
    <>
      {/* CssBaseline resets page html/css for consistent restyling */}
      <CssBaseline />
      {/* Card is the container div for the Welcome component information */}
      <Card style={styles.Welcome}>
        {/* Setting Typography to display as a h1, saying Hi and naming website (WhoChats) */}
        <Typography variant="h1" style={styles.Welcome.H1}>
          Hi, welcome to WhoChats.
        </Typography>
        {/* Setting Typography to display as a h2, asking if user is ready to connect to WhoChats */}
        <Typography variant="h2" style={styles.Welcome.H2}>
          Are you ready to connect with a stranger?
        </Typography>
        {/* TextField is an input field to take user's name and POSTing to server. */}
        <form method="POST" action="/enter">
          <TextField
          //variant of TextField, affects styling
            variant="standard"
            type="text"
            name="user"
            placeholder="Name, press enter"
            style={{ backgroundColor: "white" }}
            // This is all to position the icon in the form
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle style={{ color: "#97CC04" }} />
                </InputAdornment>
              ),
            }}
          />
          {/* to pass in channel name as hidden input variable */}
          <input type="hidden" value="general" name="channel" />
        </form>
      </Card>
    </>
  );
};

export default Welcome;
