import React, { Component } from 'react';
import { firebaseApp, database, ref } from '../firebase';
import { Link } from 'react-router';
export default class SignUp extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		email: '',
  		password: '',
  		error: {
  			message:''
  		}
  	}
  }
signup() {
	const ref = database.ref('username');
  const {name, contact, email, password } = this.state;
  const data = { name, email, contact, password}
  ref.push(data);
	firebaseApp.auth().createUserWithEmailAndPassword(email, password)
		.catch(error => {this.setState({error})
		})
}
  render() {
    return (
      <div className="box">
        <form className="form-inline" style={{margin: '5%'}}>
        	<h2> Sign Up</h2>
        	<div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Full Name"
              onChange={event => this.setState({name: event.target.value})}
            />
            <input
              className="form-control"
              type="Number"
              placeholder="Contact Number"
              onChange={event => this.setState({contact: event.target.value})}
            />
            <input
        			className="form-control"
        			type="text"
        			placeholder="Email"
        			onChange={event => this.setState({email: event.target.value})}
       		  />
        		<input
        			className="form-control"
        			type="password"
        			placeholder="Password"
        			onChange={event => this.setState({password: event.target.value})}
        		/>
        		<button
        			className="btn btn-primary"
        			type="button"
        			onClick={() =>this.signup()}
        		>
        		 SignUp
        		</button>
          </div>
          <div>{this.state.error.message}</div>
          <div className="link">
            <Link to={'/signin'}>
              Already a user? SignIn
            </Link> 
          </div>
       </form>
      </div>
     );
  }
  }
