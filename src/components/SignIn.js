import React, { Component } from 'react';
import { firebaseApp, database, ref } from '../firebase';
import { Link } from 'react-router';

export default class SignIn extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		email: '',
  		password: '',
  		error: {
  			message: ''
  		}
		}
  }
signin() {
  localStorage.clear();
  const mail = null;
  const {email, password } = this.state;
  localStorage.setItem("mail",email);
    console.log(mail);
	firebaseApp.auth().signInWithEmailAndPassword(email, password)
		.catch(error => {this.setState({error})
		})
}
  render() {
    return (
      <div className="container">
        <div className="box">
          <form className="form-inline" style={{margin:'5%'}}>
            <h2> Sign In</h2>
            	<div className="form-group">
            		<input
            			className="form-control"
            			type="text"
            			placeholder="Email"
            			onChange={event => this.setState({email: event.target.value})}
           		    size="30"
                />
            		<input
            			className="form-control"
            			type="password"
            			placeholder="Password"
            			onChange={event => this.setState({password: event.target.value})}
            		  size="30"
                />
            		<button
            			className="btnbtn-primary"
            			type="button"
            			onClick={() =>this.signin()}
            		>
            		 SignIn
            		</button>             
              </div>
            <div className="error">{this.state.error.message}</div>
            <div className="link">
              <Link to={'/signup'}>
               New user? Register here 
              </Link>
              <br />
              <Link to={'/appadmin'}>
               Admin? 
              </Link>
            </div>
         </form>
        </div>
        <div className="Image">
          <img height="150" width= "150"  src="./assets/images/logo.png" />
        </div>
     </div>
     )
  }
}
