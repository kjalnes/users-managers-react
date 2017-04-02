import React from 'react';
import UserItem from './UserItem';

const Users = (props) => {
    // console.log("props", props)
    // console.log("props.children", props.children)

    const managers = props.users.filter(user => user.isManager );

    return (
        <div>
            { props.users.map(user => {
                return props.children && React.cloneElement(props.children, { user: user, manager: user.manager, managers: managers, key: user.id })
                })
            }
        </div>
    )
}

export default Users;
