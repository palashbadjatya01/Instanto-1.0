import React, { Component } from 'react';
import { firebaseApp, database } from '../firebase';

class AppAdmin extends Component {
  signOut() {
  	firebaseApp.auth().signOut();
  }
  userFeedback() {
  const ref = database.ref('userFeedback');
  const { select, date, comment } = this.state;
  const data = { select,date, comment }
  ref.push(data);
}
feedBack() {
  const ref = database.ref('userFeedback');
  ref.on('value', gotData, errData);
    function gotData(data) {
    	const userFeedback = data.val();
    	const keys = Object.keys(userFeedback);
    	for (var i =0 ; i <keys.length; i++) {
    	   	var k= keys[i];
    	   	var select = userFeedback[k].select;
    	   	var date = userFeedback[k].date;
    	   	var comment = userFeedback[k].comment;   	
     }
   }
    function errData(err) {
      console.log(err);
    }
}
render() {    
 return (
   <div>
   	<aside className="nav-bar" style={{margin:'1%'}}>
   	  <div id="user_details">
 	    </div>
 	      <div>
	  		<button 
	      	    className="btn btn-danger"
	      		onClick={() => this.signOut()}
	      	> Sign Out 
	      	</button>
	      	<button 
	      		className="btn btn-danger"
	      		onClick={() => this.feedBack()}
	     	> FeedBacks 
	        </button>
	      </div>
	</aside>
	<div className="feedback">
	<p>Enter Your Feedback Here</p>
	  <section className="form-inline">
		 <div class="dropdown">
			<select 
			  onChange={event => this.setState({select: event.target.value})}
			>
			  <option value="Select One">Select One</option>
			  <option value="Palash"> Palash </option>
			</select>
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
			> Submit
			</button>
	   </section>
	</div>
  </div> 
    )
}
}
export default AppAdmin;