import React from 'react';
import css from '../styles/FriendListItem.module.css'



export const FriendListItem = ({id, isOnline, avatar, name }) => {
    return (
        <>                     
                    <li className={css.item} key={id}>
                        <span className={`${isOnline ? css.isOnline : css.status}`}></span>
                        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{name}</p>
                    </li>          
        </>
    );
}