import React from 'react';
import { Link } from 'react-router';

const UserEdit = (props) => {
    const managers = props.managers.map( manager => <option value={manager.id} key={manager.id}>{ manager.name }</option>)
    const manager = props.manager ? props.manager.id : 'nobody';
    return (
        <div className="panel panel-default"  >
            <div className="panel-heading">
            {props.user.name}
            </div>
            <div className="panel-body">
                <select value={manager} onChange={ () => console.log('ch ch ch change')}>
                    { managers }
                    <option value='nobody'>nobody</option>
                </select>
            </div>
        </div>
    )
}

export default UserEdit;


