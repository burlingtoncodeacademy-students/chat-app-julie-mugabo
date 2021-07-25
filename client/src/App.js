import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome.jsx';
import Chat from './components/Chat.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Welcome} exact />
          <Route path='/chat/:user/channels/:channel' component={Chat} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
