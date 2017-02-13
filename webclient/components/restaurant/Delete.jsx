let React = require('react');
import {Icon, Button, Modal, Input} from 'semantic-ui-react';
import $ from 'jquery';

class Delete extends React.Component {
  constructor()
  {
    super();
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
       console.log(data);
     }.bind(this),
     error: function(err) {
       console.error(err.toString());
     }.bind(this)
   });
   this.changeState(this.props.val);
  }

    changeState(key)
    {
      this.props.change(key,'delete');
    }

  render()
  {
    return(
      <Button color='red' floated = 'right' onClick={this.delete}>
        <Icon name='cut' />
          Delete
      </Button>
      );
    }
  }
module.exports = Delete;
