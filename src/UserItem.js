import React from 'react';
import { Link } from 'react-router';

const UserItem = (props) => {
    const managerName = props.user.manager ? props.user.manager.name : 'nobody';
    return (
        <div className="panel panel-default"  >
            <div className="panel-heading">
            { props.user.name }
            </div>
            <div className="panel-body">
                Managed by managerId:
                <Link to='users/edit'>
                    { managerName }
                </Link>
            </div>
        </div>
    )
}

export default UserItem;



