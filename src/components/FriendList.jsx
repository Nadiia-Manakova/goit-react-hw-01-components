import React from 'react';
import { FriendListItem } from './FriendListItem'



export const FriendList = ({friends}) => {
      return (
        <>
              <ul className="friend-list">
                  {friends.map(({ id, avatar, name, isOnline }) => {
                      return (
                          <FriendListItem
                              key={id}
                              status={isOnline}
                              avatar={avatar}
                              name={name}
                          />)
                  })}
            </ul>
        </>
    );
}