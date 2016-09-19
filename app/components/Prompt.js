var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');


function Prompt (props) {
    
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style= {transparentBg}>
      <h1>User Details</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>

          <div className="form-group">
            <input
              className='form-control'
              placeholder='Full Name'
              onChange={props.onUpdateName}
              value={props.Uname}
              type='text' />
          </div>

          <div className="form-group">
            <input
              className='form-control'
              placeholder='Email'
              onChange={props.onUpdateEmail}
              value={props.email}
              type='text' />
          </div>

          <div className="form-group">
            <input
              className='form-control'
              placeholder='Age'
              onChange={props.onUpdateAge}
              value={props.age}
              type='text' />
          </div>

          <div className="form-group">
            <input
              className='form-control'
              placeholder='Country'
              onChange={props.onUpdateCountry}
              value={props.country}
              type='text' />
          </div>

          <div className="form-group col-sm-4 col-sm-offset-4">
            
            <button
              className="btn btn-block btn-success"
              type="submit">
                Submit
            </button>
            
          </div>
        </form>
      </div>
    </div>
   )
 }

Prompt.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateName: PropTypes.func.isRequired,
  onUpdateEmail: PropTypes.func.isRequired,
  onUpdateAge: PropTypes.func.isRequired,
  onUpdateCountry: PropTypes.func.isRequired,
  Uname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  country : PropTypes.string.isRequired,

}

module.exports = Prompt;