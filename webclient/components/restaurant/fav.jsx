import React from 'react';
import {Button, Icon} from 'semantic-ui-react';
import $ from 'jquery';
import Delete from './Delete.jsx';
let Display = require('./Display.jsx');

class Favourites extends React.Component {
  constructor() {
        super();
        this.state = {viewArray: []};
        this.change = this.change.bind(this);
        this.view = this.view.bind(this);
    }
    view() {
      $.ajax({
       url: 'http://localhost:8080/restaurant/displayall',
       success: function(data) {
         this.setState({'viewArray': data});
       }.bind(this),
       error: function(err) {
         console.error(err.toString());
       }
     });
    }

    componentDidMount() {
      this.view();
    }

    change() {
      this.view();
    }

    render() {
        return (
          <div>
              <Display viewArray={this.state.viewArray} detail='update' change={this.change}/>
          </div>
        );
    }
}

export default Favourites;
