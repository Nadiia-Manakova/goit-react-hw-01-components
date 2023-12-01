import React from 'react';
import { FriendListItem } from './FriendListItem'
import css from "../styles/FriendList.module.css"


export const FriendList = ({friends}) => {
      return (
        <>
              <ul className={css.friendList}>
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