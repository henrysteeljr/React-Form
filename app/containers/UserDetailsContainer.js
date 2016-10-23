var React = require('react');
var UserDetails = require('../components/UserDetails');


var UserDetailsContainer = React.createClass({


 componentDidMount : function(){
 	console.log(this.props.location.state)
 
    	
  },

 handleSendMail : function () {
 	
var helper = require('sendgrid').mail;
var from_email = new helper.Email('test@example.com');
var to_email = new helper.Email('henrysteel@yahoo.com');
var subject = 'Hello World from the SendGrid Node.js Library!';
var content = new helper.Content('text/plain', 'Hello, Email!');
var mail = new helper.Mail(from_email, subject, to_email, content);

var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON(),
});

sg.API(request, function(error, response) {
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
});


},



	render: function () {
		return (

			<UserDetails
			
			Uname={this.props.location.state.Uname}
			email={this.props.location.state.email}
			age={this.props.location.state.age}
			country={this.props.location.state.country}
			sendMail={this.handleSendMail} />

		);
	}
});

module.exports = UserDetailsContainer;

