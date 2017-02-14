let React = require('react');
let {Link} = require('react-router');
import { Menu, Button, Icon } from 'semantic-ui-react';
import $ from 'jquery';

class MenuExamplePointing extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  logoutCall() {
  $.ajax({
    url: 'http://localhost:8080/users/logout',
    type: 'GET',
    // datatype: 'JSON',
    // data:{username :this.state.username,password:this.state.password},
    success: function(res)
    {
      if (typeof res.redirect === 'string')
      window.location.replace(window.location.protocol + "//" + window.location.host + res.redirect);
      console.log(res.responseText);
      // browserHistory.push('/');
    }.bind(this),
    error: function(err)
    {
      alert("error occurred while logging out");
      console.log(err.responseText);
    }.bind(this)
  });
}

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
            <Link to="/home">Search</Link></Menu.Item>
          <Menu.Item name='messages' active={activeItem === 'favourites'}
            onClick={this.handleItemClick}><Link to="/Favourites">Favourites</Link></Menu.Item>
          <Menu.Menu position='right'/>
          <Button color='red' onClick={this.logoutCall.bind(this)} >
            logout <Icon name='external share'/>
          </Button>
        </Menu>
      </div>
    );
  }
}

module.exports = MenuExamplePointing;
