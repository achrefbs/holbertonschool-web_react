import React from 'react'
import './Notifications.css'
import close_icon from '../assets/close_icon.png'
import NotificationItem from'./NotificationItem'
import PropTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape'

const btnStyle = {
  position: 'absolute',
  border: 'none',
  background: 'none',
  top: '1em',
  right: '1em',
};

class Notifications extends React.Component {
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <div>
        <div className='menuItem'>Your notifications</div>
        {this.props.displayDrawer ? 
          (<div className='Notifications'>
            <button style={btnStyle} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
              <img src={close_icon} id='close_icon' alt='close icon'></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {this.props.listNotifications.length === 0 ? <NotificationItem value='No new notification for now' /> : <></>}
              {this.props.listNotifications.map((notif) => (<NotificationItem key={notif.id} type={notif.type} value={notif.value} html={notif.html} />))}
            </ul>
          </div>)
          : <></>}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;
