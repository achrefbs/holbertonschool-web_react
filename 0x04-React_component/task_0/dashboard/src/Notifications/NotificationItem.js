import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem(prop) {
  if (prop.value)
    return (<li data-notification-type={prop.type}>{prop.value}</li>)
  else 
    return (<li data-notification-type={prop.type} dangerouslySetInnerHTML={prop.html}></li>)
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string}),
  type: PropTypes.string,
  value: PropTypes.string,
}

// NotificationItem.defaultProps = {
//   type: 'default',
// }

export default NotificationItem;
