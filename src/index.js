import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, IndexRedirect, Link } from 'react-router';
import Home from './Home';
import Users from './Users';
import UserEdit from './UserEdit';
import UserItem from './UserItem';
import Header from './Header';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.onManagerChange = this.onManagerChange.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    axios.get('/api/users')
    .then( response => response.data)
    .then( users => this.onLoad( users ))
  }

  onLoad(users) {
    this.setState({ users })
  }

  onManagerChange(userId, e) {
      const updatedManagerId = e.target.value ? e.target.value : '';
      axios.put(`/api/users/${userId}?managerId=${updatedManagerId}`)
      .then(this.fetchUsers)
      .then( () => window.location.hash = "#/users")
    }

  render() {
    const obj = Object.assign({}, this.state, { onManagerChange: this.onManagerChange })
    return (
      <div className='container'>
        <Header pathname={ this.props.location.pathname } />
          <div style={{margin: '30px 0'}}>
          { this.props.children &&  React.cloneElement(this.props.children, obj) }
          </div>
      </div>
    );
  }
}

const root = document.getElementById('root');

ReactDOM.render(
  <Router history={ hashHistory } >
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='/users' component={ Users }>
        <IndexRoute component={ UserItem } />
        <Route path='/users/edit' component={ UserEdit } />
      </Route>
    </Route>
  </Router>,
root);



