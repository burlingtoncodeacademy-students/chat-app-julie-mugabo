import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TextField } from '@material-ui/core';

const ChatFoot = () => {
  const [userInput, setUserInput] = useState('');

  let location = useLocation();
  const textInput = React.useRef();

  let user = location.pathname.split('/')[2];
  let channel = location.pathname.split('/')[4];

  // helper to clear input
  const handleChange = (evt) => {
    console.log('evt', evt);
    setUserInput(evt.target.value);
  };

  // clear input field on submit
  const handleSubmit = (evt) => {
    console.log('Entering handleSubmit...');

    // we'll handle submit with fetch in order to clean
    evt.preventDefault();

    let msgBody = {
      user: user,
      body: userInput,
    };

    console.log('msgBody', JSON.stringify(msgBody));

    // submit form
    fetch(`/messages/${channel}/`, {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msgBody),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // clear input
        setUserInput('');
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          value={userInput}
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
