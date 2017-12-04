import React, { Component } from 'react';
import { firebaseApp, database } from '../firebase';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class AppAdmin extends Component {
 constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

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
    	   	var k[20]= keys[i];
    	   	var select[20] = userFeedback[k].select;
    	   	var date[20] = userFeedback[k].date;
    	   	var comment[20] = userFeedback[k].comment;   	
     }
   }
    function errData(err) {
      console.log(err);
    }
}
 openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
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
	      		onClick={this.openModal}
	     	> FeedBacks 
	        </button>
	       <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Feedbacks</h2>
          <button onClick={this.closeModal}>close</button>
          <div class="container">          
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Feedback of</th>
                  <th>Date</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td>221716</td>
                  <td>john@example.com</td>
                </tr>
                <tr>
                  <td>Mary</td>
                  <td>Moe</td>
                  <td>mary@example.com</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>Dooley</td>
                  <td>july@example.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal>
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