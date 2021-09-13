import React from 'react';
import { getLatestNotification } from '../utils/utils';

function NotificationItem(prop) {
  if (prop.value)
    return (<li data-notification-type={prop.type}>{prop.value}</li>)
  else 
    return (<li data-notification-type={prop.type} dangerouslySetInnerHTML={prop.html}></li>)
}

export default NotificationItem;
