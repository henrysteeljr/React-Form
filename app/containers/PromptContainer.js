var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({

contextTypes: {
  router: React.PropTypes.object.isRequired
},
getInitialState: function (){
  return {
    Uname: '',
    email: '',
    age: '',
    country: ''
  }
},

handleUpdateName: function (event) {
  this.setState({
    Uname: event.target.value
  });
 },

 handleUpdateEmail: function (event) {
  this.setState({
    email: event.target.value
  });
 },
  
handleUpdateAge: function (event) {
  this.setState({
    age: event.target.value
  });
 },

handleUpdateCountry: function (event) {
  this.setState({
    country: event.target.value
  });
 },

componentDidMount: function () {

   var newName= this.state.Uname; 
   var newEmail= this.state.email;
   var newAge= this.state.age;
   var newCountry= this.state.country;
   arrayInfo = [newName, newEmail, newAge, newCountry]
   
   this.setState({
   	arrayInfo: [newName, newEmail, newAge, newCountry]
   })
},

handleSubmitUser: function () {

   this.context.router.push({
	pathname: '/userDetails',
	state: {
		arrayInfo: this.state.arrayInfo
	   }
	})
},


	render: function () {
		return (
			<Prompt
			     
				onUpdateName={this.handleUpdateName}
				onUpdateEmail={this.handleUpdateEmail}
				onUpdateAge={this.handleUpdateAge}
				onUpdateCountry={this.handleUpdateCountry}
				onSubmitUser={this.handleSubmitUser}	
				Uname={this.state.Uname}
				email={this.state.email}
				age={this.state.age}
				country={this.state.country} />
				
		)
	}
});

module.exports = PromptContainer;
