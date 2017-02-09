let React = require('react');
import {Icon, Button, Modal, Input} from 'semantic-ui-react';
import $ from 'jquery';

class Update extends React.Component {
  constructor()
  {
    super();
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.change = this.change.bind(this);
    this.update = this.update.bind(this);
    this.state = {'id': '' , 'name': '' , 'address': '', 'rating': '' ,'viewArray' : [], 'comment': '', modalOpen: false, content: 'Update'}
  }

    handleOpen = (e) => this.setState({
      modalOpen: true,
    })

    handleClose(e) {
      this.setState({modalOpen: false});
      this.setState({content: 'Updated'});
      this.update();
  }

  change(event)
  {
    this.setState({[event.target.name]: event.target.value})
  }

  update()
  {
    let dat = {
      id: this.props.id,
      comment: this.state.comment
    };
    $.ajax({
     url: 'http://localhost:8080/restaurant/update',
     type: 'PUT',
     data: dat,
     success: function(data) {
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
      <Modal
        trigger={<Button color='green' floated = 'right' onClick={this.handleOpen}><Icon name='upload' />{this.state.content}</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Modal.Content>
          <h3>Do you wish to update your comment?</h3>
          <Input type="text" name="comment" value={this.state.comment}
            onChange={this.change}/>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Update
          </Button>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='cut' /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>);
    }
  }
module.exports = Update;
