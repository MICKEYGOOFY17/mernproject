let React = require('react');
let ListItem = require('./ListItems.jsx');
import {Card} from 'semantic-ui-react';

class Display extends React.Component {

  constructor() {
    super();
  }

  render() {
    let ingredients = this.props.viewArray;
    let detail = this.props.detail;
    let ch = '';
    if(detail === 'update')
    {
      ch = this.props.change;
    }

    if(ingredients.length > 0)
    {
    let ListItems = ingredients.map(function(item) {
        return (<ListItem key={arguments[1]} id={item._id} name={item.name} address = {item.address}
          rating = {item.rating} cuisine = {item.cuisines} image={item.image} detail = {detail}
          comment = {item.comments} change={ch}/>);
      });
        return <Card.Group style={{paddingLeft: 20, paddingRight: -20}}>{ListItems}</Card.Group>;
    }
    else {
      return <h1>No Favourites</h1>;
    }
  }
}
module.exports = Display;
