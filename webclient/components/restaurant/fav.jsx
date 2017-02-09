import React from 'react';
import {Button, Icon} from 'semantic-ui-react';
import $ from 'jquery';
import Delete from './Delete.jsx';
let Display = require('./Display.jsx');

class Favourites extends React.Component {
  constructor() {
        super();
        this.state = {viewArray: []};
        this.view = this.view.bind(this);
    }
    view() {
      $.ajax({
       url: 'http://localhost:8080/restaurant/displayall',
       success: function(data) {
         this.setState({'viewArray': data});
         console.log(data);
       }.bind(this),
       error: function(err) {
         console.error(err.toString());
       }
     });
    }

    componentDidMount(){
      this.view();
    }
    render() {
        return (
          <div>
              <Display viewArray={this.state.viewArray} detail={this.props.detail}/>
          </div>
        );
    }
}

export default Favourites;
