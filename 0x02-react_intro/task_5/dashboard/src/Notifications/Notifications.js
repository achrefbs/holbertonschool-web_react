import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

const Notifications = () => {
  const btnStyle = {
    position: 'fixed',
    border: 'none',
    background: 'none',
    top: '1em',
    right: '1em',
  }
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
      <button style={btnStyle} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
        <img src={close_icon} id='close_icon' alt='close icon'></img>
      </button>
    </div>
  );
}

export default Notifications;
