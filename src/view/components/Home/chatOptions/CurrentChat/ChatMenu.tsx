import * as React from 'react'; // import { useState } from 'react';
import smile from '../../../../../assets/icons/smile.svg';
import clip from '../../../../../assets/icons/paperclip.svg';
import mic from '../../../../../assets/icons/mic.svg';
import FormControl from 'react-bootstrap/FormControl';

const ChatMenu: React.FunctionComponent = (props) => {
  return (
    <menu className='gray menu-chat container-fluid d-flex justify-content-evenly align-items-center py-3 m-0'>
      <img className='icon click col-1' src={smile} alt='Emojis' />
      <img
        className='icon click col-1'
        src={clip}
        alt='Files'
      />
      <form className='col-9'>
        <FormControl
          className='mx-2 py-2 ps-4'
          style={{
            borderRadius: 30,
          }}
          placeholder='Escribe un mensaje'
        />
      </form>
      <img
        className='icon click col-1'
        src={mic}
        alt='Audio'
      />
    </menu>
  );
};

export default ChatMenu;
