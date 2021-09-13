import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  render() {
    if (this.props.value)
      return (<li onClick={() => {this.props.markAsRead(this.props.id) }} data-notification-type={this.props.type}>{this.props.value}</li>)
    else 
      return (<li onClick={() => {this.props.markAsRead(this.props.id) }} data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html}></li>)
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string}),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
}

NotificationItem.defaultProps = {
  // type: 'default',
  markAsRead: () => void(0),
}

export default NotificationItem;
