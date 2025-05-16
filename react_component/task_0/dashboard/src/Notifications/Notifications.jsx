import React from 'react';
import './Notifications.css'
import closeIcon from '../assets/close-icon.png'
import NotificationItem from './NotificationItem';

export default function Notifications({ displayDrawer = false, notifications = [] }) {
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{
              position: 'absolute',
              right: '1rem',
              top: '1rem',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            <img src={closeIcon} alt="Close" width="10px" />
          </button>
          {notifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {notifications.map(({ id, type, value, html }) => (
                  <NotificationItem
                    key={id}
                    type={type}
                    value={value}
                    html={html}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}