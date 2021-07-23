import { styles } from "./styles"

const Welcome = () => {
  return (
    <>
    <div style = {styles.Welcome}>
      <h1 style = {styles.Welcome.H1}>Hi, ready to chat?</h1>
      <h2 style = {styles.Welcome.H2}>Enter your name</h2>
      <form method = "POST" action = "/enter">
        <input type = "text" name = "user"/>
      </form>
      </div>
    </>
  );
};

export default Welcome;
