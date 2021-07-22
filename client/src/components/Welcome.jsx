const Welcome = () => {
  return (
    <>
      <h1>Hi, ready to chat?</h1>
      <h2>Enter your name</h2>
      <form method = "POST" action = "/enter">
        <input type = "text" placeholder = "Who are you?" name = "user"/>
        <input type = "submit" value = "Start connecting!" />
      </form>
    </>
  );
};

export default Welcome;
