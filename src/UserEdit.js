import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

const UserEdit = (props) => {
    const managerId = props.manager ? props.manager.id : '';
    const managers = props.managers.filter(manager => manager.id !== props.user.id)
        .map(manager => <option value={manager.id} key={manager.id}>{ manager.name }</option>);

    return (
        <div className="panel panel-default"  >
            <div className="panel-heading">
                { props.user.name }
            </div>
            <div className="panel-body">
                <select value={ managerId} onChange={ props.onManagerChange.bind(null, props.user.id) }>
                    { managers }
                    <option value=''>nobody</option>
                </select>
            </div>
        </div>
    )
}

export default UserEdit;


