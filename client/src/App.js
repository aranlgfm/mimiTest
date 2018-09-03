import React, { Component } from 'react';
import { Form, UserTemplate } from './pages';
import { Userlist } from './components';
import './App.css';

class App extends Component {

  state = {
    userlist: [],
    user: {
      name: '',
      age: 0
    }
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = _ => {
    fetch(`http://localhost:3500/user`)
      .then(res => res.json())
      .then(res => this.setState({ userlist: res.data }))
      .catch(err => console.error(err))
  }

  addUser = _ => {
    const { user } = this.state;
    fetch('http://localhost:3500/user/insert', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(this.getUser)
      .catch(err => console.error(err));
  }

  renderUser = ({ id, name, age }) => <div key={id}>{name} : {age}</div>

  delUser = (id) => {
    fetch(`http://localhost:3500/user/del?id=${id}`)
      .then(this.getUser)
      .catch(err => console.error(err));
  }

  test = (id) => {
    console.log('hit me ---------' + id);
  }

  render() {
    const { userlist, user } = this.state;
    return (
      <div className="App">
        <UserTemplate form={<Form
          name={user.name}
          age={user.age}
          nameChange={e => this.setState({ user: { ...user, name: e.target.value } })}
          ageChange={e => this.setState({ user: { ...user, age: e.target.value } })}
          addUser={this.addUser}
        />}>
          <Userlist users={userlist} onToggle={this.delUser}></Userlist>
        </UserTemplate>
      </div>
    );
  }
}

export default App;
