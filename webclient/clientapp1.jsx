import React from 'react';
import ReactDOM from 'react-dom';
import Child from './components/restaurant/search.jsx';
let Card = require('./components/restaurant/card.jsx');


import $ from 'jquery';

class MainComponent extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.onClick2 = this.onClick2.bind(this);
        this.state = {'resArray' : [], 'id' : ''}
    }
    onClick(id, cuisine)
    {
      $.ajax({
        url: 'https://developers.zomato.com/api/v2.1/cities?q=' + id
        + '&apikey=4be6f427983a4fdbbd96118609d30c06',
        dataType: 'jsonp',
        success: function(json) {
          this.setState({'id': json.locationSuggestions[0].id});
          this.onClick2(this.state.id, cuisine);
        }.bind(this)
      });
      }
    onClick2(id, cuisine)
    {
      $.ajax({
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=' + id
      + '&entity_type=city&q=' + cuisine + '&count=10&apikey=4be6f427983a4fdbbd96118609d30c06',
      dataType: 'jsonp',
      success: function(json) {
        this.setState({'resArray': json.restaurants});
      }.bind(this)
      });
    }

    render() {
      return (
            <div>
              <Child click={this.onClick}/>
              <Card resArray={this.state.resArray} detail="save"/>
            </div>
        );
    }

}

module.exports = MainComponent;
