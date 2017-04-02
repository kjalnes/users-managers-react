import React from 'react';
import UserItem from './UserItem';
import UserEdit from './UserEdit';

class Users extends React.Component {
    constructor(props){
        super(props)
        this.state = { view: 'UserItem' }
    }


    render() {
        return (
            <div>
                { this.props.users.map( user =>  <UserItem key={ user.id} user={ user } manager={ user.manager } /> )}
            </div>
        )

    }
}
export default Users;


    //    this.showUserEdit = this.showUserEdit.bind(this);
    //     this.showUserItem = this.showUserItem.bind(this);
    // showUserEdit() {
    //     this.setState({ view: 'UserEdit'})
    // }

    // showUserItem() {
    //     this.setState({ view: 'UserItem'})
    // }
