import React from 'react'
import close_icon from '../assets/close_icon.png'
import NotificationItem from'./NotificationItem'
import PropTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape'
import { StyleSheet, css } from 'aphrodite'

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

  shouldComponentUpdate(nextProps) {
    if(this.props.listNotifications.length < nextProps.listNotifications.length)
      return true;
    return false;
  }

  render() {
    return (
      <div>
        <div className={css(styles.menuStyle)} id='menuItem'>Your notifications</div>
        {this.props.displayDrawer ? 
          (<div className={css(styles.notifStyle)} id='Notifications'>
            <button style={btnStyle} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
              <img src={close_icon} className={css(styles.iconStyle)} alt='close icon'></img>
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

const styles = StyleSheet.create({
  notifStyle: {
    border: '2px dashed #e1354b',
    padding: '1rem',
    display: 'flexbox',
    width: '30rem',
    position: 'absolute',
    right: 0,
  },
  
  defaultStyle: {
    color: 'blue',
  },
  
  urgentStyle: {
    color: 'red',
  },
  
  iconStyle: {
    width: '22px',
    height: '22px',
  },

  menuStyle: {
    textAlign: 'right',
  }
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;
