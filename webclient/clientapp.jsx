let React = require('react');
let ReactDOM = require('react-dom');
let {browserHistory, Route, Router, IndexRoute} = require('react-router');
let NavBar = require('./components/NavBar');
let About = require('./clientapp2.jsx');
let Home = require('./clientapp1.jsx');
let Login = require('./components/sample/Login');

let MainComp = React.createClass({
  render: function() {
    return(
      <div>
      <NavBar/>
      <br/><br/><br/><br/>
        {this.props.children}
      </div>
    );
  }
});
ReactDOM.render(
  <Router history={browserHistory}>
                <Route path='/' component={Login}/>
                <Route component={MainComp}>
                <Route path='/home' component={Home}/>
                <Route path='/Favourites' component={About}/>
              </Route>
  </Router>, document.getElementById('app'));
