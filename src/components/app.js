import React, { Component } from 'react';
import { firebaseApp, database } from '../firebase';

class App extends Component {
	constructor(props) {
  	super(props);
  	this.state = {
  		error: {
  			message:' '
  		}
	 }
}
signOut() {
  	firebaseApp.auth().signOut();
  }

userFeedback() {
  const ref = database.ref('userFeedback');
  const { select, date, comment} = this.state;
  const data = { select,date, comment }
  ref.push(data)
}


  render() {    
    return (
	      <div>
	      	<aside className="nav-bar" style={{margin:'1%'}}>
	      	<div id="user_details">
	      	</div>
	      		<div>
	      		 {localStorage.getItem("mail")}
	      		<button 
	      			className="btn btn-danger"
	      			onClick={() => this.signOut()}
	      		> Sign Out 
	      	    </button>
	      	    </div>
	      	</aside>
		      	  <div className="feedback">
		      	  	<p>Enter Your Feedback Here</p>
		      	  <section className="form-inline">
		      	    <div class="dropdown">
						<td>
						    <select  onChange={event => this.setState({select: event.target.value})}>
						        <option value="Select one" default="selected">Select One</option>
						        <option value="Palash">Palash</option>		        
						    </select>
						</td>
				    </div>
				    <div>
				    	<input
				    		type="date"
				    		onChange={event => this.setState({date: event.target.value})}
				    	/>
				    </div>
					
				    <input
				    	type="text"
				    	placeholder="Enter Your Comment Here"
				   		onChange={event => this.setState({comment: event.target.value})}
				    />
				    <button
				    	className="btn btn-primary"
				    	type="submit"
				    	onClick={() =>this.userFeedback()}
				    	onClick={() =>this.data()}
				    > Submit
				    </button>
				  </section>
				  </div>
				  <div>{this.state.error.message}</div>
	   	   </div> 
    )
  }
}

export default App;