import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
           
        this.state = {
             username: '',
             password: '',
             loggedIn
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault()
        const { username, password } = this.state
        //logn logicc
        if(username === "S" && password === "S"){
            localStorage.setItem("token", "AnyRandomString")
            this.setState({
                loggedIn: true
            })
        }
    }
    
    render() {
        if(this.state.loggedIn){
            return <Redirect to='/admin' />
        }
        return (
            <div>
                <h1>Login</h1>

                <form onSubmit={this.submitForm}>
                    <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}/>
                    <br/>
                    <input type="text" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
                    <br/>
                    <input type="submit" />
                    <br/>
                </form>
                
            </div>
        )
    }
}
