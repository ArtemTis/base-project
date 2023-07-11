import React from 'react'
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }

    user = this.props.user
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder='Имя' onChange={e => this.setState({ first_name: e.target.value })} />
                <input placeholder='Фамилия' onChange={e => this.setState({ last_name: e.target.value })} />
                <textarea placeholder='Биография' onChange={e => this.setState({ bio: e.target.value })} />
                <input placeholder='Возраст' onChange={e => this.setState({ age: e.target.value })} />
                <label htmlFor='isHappy'>Счастлив?</label>
                <input type='checkbox' id='isHappy' onChange={e => this.setState({ isHappy: e.target.checked })} />
                <button type='button' onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                    }
                    if (this.props.user) {
                        this.userAdd.id = this.props.user.id
                    }
                    this.props.addUser(this.userAdd)
                }}>Добавить</button>
            </form>
        )
    }
}

export default AddUser