let React = require('react');
import {Icon, Button, Modal, Input} from 'semantic-ui-react';
import $ from 'jquery';
import Update from './update.jsx';
import Save from './save.jsx';
import Delete from './Delete.jsx';

class Add extends React.Component {
  constructor()
  {
    super();
  }

  render() {
    let detail = this.props.detail;
      if(detail === 'save')
      {
        return (
          <Save id = {this.props.id} name = {this.props.name}
          address = {this.props.address} rating = {this.props.rating}
          image = {this.props.image} refresh={this.props.refresh}/>);
        }
      else {
        return (
        <div>
            <Update id = {this.props.id} name = {this.props.name}
              address = {this.props.address} rating = {this.props.rating}
              image = {this.props.image} change={this.props.change} val={this.props.val}/>

              <Delete id = {this.props.id} change={this.props.change} val={this.props.val}/>
        </div>
        );
      }
  }
}
module.exports = Add;
