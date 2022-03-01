import React,{ component } from "react";


class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }

    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        // console.log(this.state) 
        fetch('https://murmuring-badlands-19847.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                  email: this.state.signInEmail,
                  password: this.state.signInPassword
            })
        })
         .then(resp => resp.json())
         .then(data => {
            // console.log(data)
            if (data.id){
                this.props.loadUser(data)
                console.log("user loaded")
                this.props.OnrouteChange('home') 
                console.log("After route function")

            }
        })
        // console.log(this.state)
    }


    render(){
        const { OnrouteChange } = this.props 
        return(
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={ this.onEmailChange }   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={ this.onPasswordChange } className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                        </fieldset> 
                        <div className="">
                        <input onClick={ this.onSubmitSignIn }   className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            {/* <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="register" onClick={ () => OnrouteChange('register') } /> */}
    
                            <a href="#0" className="f6 link dim black db pointer" onClick={ () => OnrouteChange('register') }>Register</a>
                        </div> 
                    </div>
                </main>
            </article>
    
        )

    }
    
}

export default SignIn ;



