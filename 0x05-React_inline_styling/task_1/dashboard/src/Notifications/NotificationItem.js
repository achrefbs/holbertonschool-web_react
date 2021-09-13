import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

class NotificationItem extends React.PureComponent {
  pick = this.props.type === 'default' ? css(styles.defaultStyle) : css(styles.urgentStyle);

  render() {
    if (this.props.value)
      return (<li className={this.pick} onClick={() => {this.props.markAsRead(this.props.id)}} data-notification-type={this.props.type}>{this.props.value}</li>)
    else 
      return (<li className={this.pick} onClick={() => {this.props.markAsRead(this.props.id)}} data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html}></li>)
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    color: 'blue',
  },
  
  urgentStyle: {
    color: 'red',
  },
});


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
