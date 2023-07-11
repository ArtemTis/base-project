import React from 'react'
import './App.css';
import Header from './components/Header';
import Image from './components/Image';
import logo from './img/logo.png'
import Users from './components/Users';
import AddUser from './components/AddUser';
import axios from 'axios';

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {

  constructor(props) {
    super(props)

    axios.get(baseUrl).then((res) => {
      this.setState({ users: res.data.data })
    })

    this.state = {
      users: []
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }

  render() {
    return (
      <div className="name" >
        <Header title='Список пользователей' />
        <main>
          <Users onEdit={this.editUser} users={this.state.users} onDelete={this.deleteUser} />
        </main>
        <aside>
          <AddUser addUser={this.addUser} />
        </aside>
      </div>
    )
  };

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user) {
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({ users: [] }, () => {
      this.setState({ users: [...allUsers] })
    })
  }

  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, { id, ...user }] })
  }
}

export default App;
