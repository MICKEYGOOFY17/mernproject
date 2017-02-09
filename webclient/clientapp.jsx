var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var NavBar = require('./components/NavBar');
var About = require('./clientapp2.jsx');
var Home = require('./clientapp1.jsx');

var MainComp = React.createClass({
  render:function(){
    return(
      <div>
      <NavBar/>
      <br/><br/><br/><br/>
        {this.props.children}
      </div>
    );
  }
})
ReactDOM.render(
  <Router history={browserHistory}>
                <Route path="/" component={MainComp}>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
              </Route>
  </Router>,document.getElementById('app'));
