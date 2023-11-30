import React from 'react';

export const FriendListItem = ({id, isOnline, avatar, name }) => {
    return (
        <>                     
                    <li className="item" key={id}>
                        <span className="status">{isOnline}</span>
                        <img className="avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="name">{name}</p>
                    </li>          
        </>
    );
}