import React from 'react';
import ReactDOM from 'react-dom';
import Child from './components/restaurant/search.jsx';
var Card = require('./components/restaurant/card.jsx');

import $ from 'jquery';

class MainComponent extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.state = {"resArray" : []}
    }
    onClick(id,cuisine)
    {
      $.ajax({
        url: 'https://developers.zomato.com/api/v2.1/search?entity_id='+id+'&entity_type=city&q='+cuisine+'&count=10&apikey=4be6f427983a4fdbbd96118609d30c06',
        dataType: 'jsonp',
        success: function(json){
          console.log('data: ', json.restaurants);
          this.setState({"resArray":json.restaurants});
        }.bind(this)
    });
    }

    render() {
      return (
            <div>
              <Child  click={this.onClick}/>
              <Card resArray={this.state.resArray}/>
            </div>
        )
    }

}
ReactDOM.render(
    <MainComponent/>, document.getElementById('mountapp'));
