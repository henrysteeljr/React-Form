var React = require('react');
var transparentBg = require('../styles').transparentBg;


function  Done   (props) {
		return (
			<div className="jumbotron col-sm-12 text-center" style={transparentBg}>
			<p className='lead'>An email has been sent to your email adress</p>
			</div>
		)
	}

module.exports =  Done;

