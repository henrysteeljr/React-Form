var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
var divWidth = require('../styles').divWidth;
var pad = require('../styles').pad;
var ReactRouter = require('react-router');



function UserDetails (props) {
		return (
	<div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h1>Your Details</h1>

          <div className='container'>
          <div>
          <h3 className= 'text-left' style={divWidth}>
       <ul className="list-unstyled">
     <li style={pad}>
   User: {props.Uname}
     </li>
   <li style={pad}>
   Email: {props.email}
   </li> 
  <li style={pad}>
   Age: {props.age}
  </li>
 <li style={pad}>
   Country: {props.country}
 </li>
    </ul>
    </h3>
    </div>
      </div>

      <p className='lead'></p>
     
        <button type='button' className='btn btn-lg btn-success'>Print</button>
      
    </div>
	)
}

UserDetails.propTypes = {
 	
 	Uname: PropTypes.string.isRequired,
 	email: PropTypes.string.isRequired,
 	age: PropTypes.string.isRequired,
 	country: PropTypes.string.isRequired,

}



module.exports = UserDetails;

