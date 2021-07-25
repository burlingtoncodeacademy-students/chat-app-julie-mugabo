import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import { TextareaAutosize } from '@material-ui/core';

const ChatFoot = () => {
  const [channel, setchannel] = useState('general');

  let location = useLocation();

  let user = location.pathname.split('/').splice(-1).toString();

  return (
    <>
      <form action={`/messages/${channel}`} method='POST'>
        <TextareaAutosize
          variant='outlined'
          placeholder={`Talk to #${channel}`}
          name='message'
          style={{ width: '50vw' }}
        />
        <input type='hidden' value={user} name='user' />
      </form>
    </>
  );
};

export default ChatFoot;
