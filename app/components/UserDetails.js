var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');



function UserDetails (props) {
		return (
	<div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h1>Your Details</h1>

      <div>
    
      </div>

      <p className='lead'></p>
     
        <button type='button' className='btn btn-lg btn-success'>Print</button>
      
    </div>
	)
}




module.exports = UserDetails;

