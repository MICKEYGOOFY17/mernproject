var React = require('react');
var {Link} = require('react-router');
var NavBar = React.createClass({

render:function(){
  return(
    <div className="container-fluid">
    <ul className="nav navbar-nav">
    <li><Link to="/home">Search</Link></li>
    <li><Link to="/about">Favourites</Link></li>
    </ul>
    </div>
  );
}
});

module.exports=NavBar;
