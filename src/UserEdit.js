import React from 'react';
import { Link } from 'react-router';

const UserEdit = (props) => {
    console.log(props)


    return (
        <div className="panel panel-default"  >
            <div className="panel-heading">

            </div>
            <div className="panel-body">
                Edit user
            </div>
        </div>
    )
}

export default UserEdit;




// return (
//      <div>
//         { this.props.users.map( user =>  <UserEdit key={ user.id} user={ user }   getManager={ this.getManager } showItem={ this.showUserItem }/> )}
//     </div>
// )

