import React from "react";


class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            UserEmail: '',
            UserPassword: '',
            UserName: ''

        }
    }

    onNameChange = (event) => {
        this.setState({UserName: event.target.value})

    }

    onEmailChange = (event) => {
        this.setState({UserEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({UserPassword: event.target.value})
    }

    onSubmit = () => {
        // console.log(this.state)
        // console.log("asdasdiasdijasidji")
        // this.props.OnrouteChange('home')
        fetch('https://murmuring-badlands-19847.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.UserEmail,
                password: this.state.UserPassword,
                name: this.state.UserName
            })

        })
         .then(resp => resp.json())
         .then(user => {
             if(user.id){
                this.props.loadUser(user)
                //  console.log("now changing route ")
                this.props.OnrouteChange('home') 
                console.log("Registered")
             }
             else{
                console.log("Not registered")
             }
         })
    }

    render(){
        const { OnrouteChange } = this.props 
        return(
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                <main className="pa4 black-80">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">Name</label>
                            <input onChange={ this.onNameChange } className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name"/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input onChange={ this.onEmailChange } className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="password">Password</label>
                            <input onChange={ this.onPasswordChange }  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                        </fieldset>
                        <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={ this.onSubmit } />
                        </div>
                        <div className="lh-copy mt3">
                        {/* <a href="#0" className="f6 link dim black db">Sign up</a> */}
                        </div>
                    </form>
                </main>
            </article>
        )}
   

    
}

export default Register ;




