let React = require('react');
let ListItem = require('./ListItems.jsx');
import {Card} from 'semantic-ui-react';

let Display = React.createClass({
  render: function() {
    let ingredients = this.props.viewArray;
    let detail = this.props.detail;

    if(ingredients.length > 0)
    {
    let ListItems = ingredients.map(function(item) {
        return (<ListItem key={arguments[1]} id={item._id} name={item.name} address = {item.address}
          rating = {item.rating} cuisine = {item.cuisines} image={item.image} detail = {detail}/>);
      });
        return <Card.Group style={{paddingLeft: 20, paddingRight: -20}}>{ListItems}</Card.Group>;
    }
    else {
      return <h1></h1>;
    }
  }
});
module.exports = Display;