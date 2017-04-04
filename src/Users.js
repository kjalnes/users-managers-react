import React from 'react';
import UserItem from './UserItem';

const Users = (props) => {
    const managers = props.users.filter(user => user.isManager );
    return (
        <div>
            { props.users.map(user => {
                return props.children && React.cloneElement(props.children, { user: user, manager: user.manager, managers: managers, key: user.id, onManagerChange: props.onManagerChange })
                })
            }
        </div>
    )
}

export default Users;
