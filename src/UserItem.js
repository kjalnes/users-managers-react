import React from 'react';

const UserItem = (props) => {
    console.log(props)
    return (
        <div className="panel panel-default"  >
            <div className="panel-heading">
            { props.user.name }
            </div>
            <div className="panel-body">
                Managed by [managerName]
            </div>
        </div>
    )
}

export default UserItem;



