
//this is the HOMEVIEW
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;

 function Home () {
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h1>Company Name</h1>
      <p className='lead'>Join us</p>
      <Link to='/enterInfo'>
        <button type='button' className='btn btn-lg btn-success'>Sign Up</button>
      </Link>
    </div>
  )
}

module.exports = Home;

