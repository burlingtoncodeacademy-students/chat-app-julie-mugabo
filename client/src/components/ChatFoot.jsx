import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const ChatFoot = () => {
  const [channel, setchannel] = useState('general');

  let location = useLocation();

  let user = location.pathname.split('/').splice(-1).toString();

  return (
    <>
      {/* ? how do we set channel? where do we do that? I think from the parent... */}
      <form action={`/messages/${channel}`} method='POST'>
        <input type='text' placeholder={`Talk to #${channel}`} name='message' />
        <input type='hidden' value={user} name='user' />
      </form>
      <button>Refresh chat</button>
    </>
  );
};

export default ChatFoot;
