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


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    <IndexRoute component= {Home} />
    <Route path= 'enterInfo' component={PromptContainer} />
    <Route path= 'action/:enterInfo' component={PromptContainer} />
    <Route path= 'userDetails' component={UserDetailsContainer} />
    </Route>
  </Router>
);

module.exports = routes;