let React = require('react');
import {Icon, Button, Modal, Input} from 'semantic-ui-react';
import $ from 'jquery';

class Delete extends React.Component {
  constructor()
  {
    super();
    this.state = {content:'Delete'}
    this.delete = this.delete.bind(this);
  }

  delete()
  {
    let dat = {
      id: this.props.id,
    };
    $.ajax({
     url: 'http://localhost:8080/restaurant/deleteid',
     type: 'DELETE',
     data: dat,
     success: function(data) {
       this.setState({content: 'Deleted'});
       console.log(data);
     }.bind(this),
     error: function(err) {
       console.error(err.toString());
     }.bind(this)
   });
  }

  render()
  {
    return(
      <Button color='green' floated = 'right' onClick={this.delete}>
        <Icon name='cut' />
          {this.state.content}
      </Button>
      );
    }
  }
module.exports = Delete;
