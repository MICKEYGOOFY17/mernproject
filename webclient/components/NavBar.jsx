var React = require('react');
var {Link} = require('react-router');
import { Input, Menu, Segment } from 'semantic-ui-react'

class MenuExamplePointing extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}><Link to="/">Search</Link></Menu.Item>
          <Menu.Item name='messages' active={activeItem === 'favourites'} onClick={this.handleItemClick}><Link to="/Favourites">Favourites</Link></Menu.Item>
          <Menu.Menu position='right'>

          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

module.exports=MenuExamplePointing;
