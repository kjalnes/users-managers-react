import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

class UserEdit extends React.Component {
    constructor(props) {
        super(props);
        const managerId = props.manager ? props.manager.id : 'nobody';
        this.state = { managerId: managerId };
        this.onManagerChange = this.onManagerChange.bind(this);
    }

    onManagerChange(e) {

        this.setState({ managerId: e.target.value })
        axios.put('/api/users/edit')
    }

    render() {
        const managers = this.props.managers.map( manager => <option value={manager.id} key={manager.id}>{ manager.name }</option>)

        return (
            <div className="panel panel-default"  >
                <div className="panel-heading">
                { this.props.user.name }
                </div>
                <div className="panel-body">
                    <select value={this.state.managerId} onChange={ this.onManagerChange }>
                        { managers }
                        <option value='nobody'>nobody</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default UserEdit;


