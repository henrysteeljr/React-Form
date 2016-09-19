var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;

 function Home () {
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h1>MY INFO</h1>
      <p className='lead'>First REACT app</p>
      <Link to='/enterInfo'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </div>
  )
}

module.exports = Home;

