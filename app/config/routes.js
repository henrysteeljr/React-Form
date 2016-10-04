var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var UserDetailsContainer = require('../containers/UserDetailsContainer');
var DoneContainer = require('../containers/DoneContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    <IndexRoute component= {Home} />
    <Route path= 'enterInfo' component={PromptContainer} />
    <Route path= 'action/:enterInfo' component={PromptContainer} />
    <Route path= 'userDetails' component={UserDetailsContainer} />
    <Route path= 'done' component={DoneContainer} />
    </Route>
  </Router>
);

module.exports = routes;