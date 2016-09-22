var React = require('react');
var UserDetails = require('../components/UserDetails');

var UserDetailsContainer = React.createClass({
 

 componentDidMount : function(){
 	console.log(this.props.location.state)
 
    	
  },

	render: function () {
		return (

			<UserDetails
			
			Uname={this.props.location.state.Uname}
			email={this.props.location.state.email}
			age={this.props.location.state.age}
			country={this.props.location.state.country} />

		);
	}
});

module.exports = UserDetailsContainer;

