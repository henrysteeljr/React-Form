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

handleSubmitUser: function () {

   this.context.router.push({
	pathname: '/userDetails',
	state: this.state
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
