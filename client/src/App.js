import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome.jsx';
import Chat from './components/Chat.jsx';

function App() {
  return (
    <>
    {/* utilizing BrowserRouter to set up paths for entire app */}
      <BrowserRouter>
      {/* Using Switch to render one path at a time */}
        <Switch>
          {/* sets up path to render Welcome component on initial address */}
          <Route path='/' component={Welcome} exact />
          {/* sets up path to render Chat component dependant on user and channel params.
          Chat component is parent of ChatHead, SideBar, ChatMess, ChatFoot */}
          <Route path='/chat/:user/channels/:channel' component={Chat} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
