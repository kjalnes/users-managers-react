import React from 'react';
import UserItem from './UserItem';

const Users = (props) => {
    // console.log(props.users)
    // const users =props.users.map( user => user.name ).join(', ')

    return (
        <div>
            { props.users.map( user =>  <UserItem user={ user } key={ user.id}/>)}
        </div>
    )
}
export default Users;
