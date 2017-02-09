let React = require('react');
let ListItem = require('./ListItems.jsx');
import {Card} from 'semantic-ui-react';
let List = React.createClass({
  render: function() {
    let ingredients = this.props.resArray;
    let detail = this.props.detail;

    if(ingredients.length > 0)
    {
    let ListItems = ingredients.map(function(item) {
        return <ListItem key={arguments[1]} id={item.restaurant.R.res_id}
          name={item.restaurant.name} address = {item.restaurant.location.address}
          image = {item.restaurant.featuredImage}
          rating = {item.restaurant.userRating.aggregate_rating}
          cuisine = {item.restaurant.cuisines} detail={detail}/>;
      });
        return <Card.Group style={{paddingLeft: 20, paddingRight: -20}}>{ListItems}</Card.Group>;
    }
    else {
      return <h1>Hello :)</h1>;
    }
  }
});
module.exports = List;
