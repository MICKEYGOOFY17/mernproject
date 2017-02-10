let React = require('react');
import {Card, Icon, Image} from 'semantic-ui-react';
import Add from './button.jsx';
import $ from 'jquery';


class ListItem extends React.Component {
  constructor() {
    super();
    this.find = this.find.bind(this);
    this.refresh = this.refresh.bind(this);
    this.state = {comment:''};
  }

  find() {
    this.setState({comment:this.props.comment});
    $.ajax({
     url: 'http://localhost:8080/restaurant/display/'+this.props.id,
     success: function(data) {
       if(data !== 'enter a valid id')
       {
           this.setState({comment:data});
           console.log(this.state.comment);
       }
     }.bind(this),
     error: function(err) {
       console.error(err.toString());
     }
   });
  }

  componentDidMount() {
    this.find();
  }

  refresh() {
    this.find();
  }

  render() {
    let detail = this.props.detail;
    let ch = '';
    let comment = '';
    if(detail === 'update')
    {
      ch = this.props.change;
    }
    if(detail === 'update')
    {
      comment = this.props.comment;
    }
    else {
      comment = this.state.comment;
    }
    return (
                    <Card style={{marginLeft: 25}}>
                            <Image src={this.props.image} style={{height: 170}}/>
                            <Card.Content>
                              <Card.Header>
                                {this.props.name}
                              </Card.Header>
                               <Card.Meta>
                                 {this.props.id}
                               </Card.Meta>
                               <Card.Description>
                                 {this.props.address}<br/>
                                 <h4>Comment:</h4>{comment}
                               </Card.Description>
                             </Card.Content>
                             <Card.Content extra>
                                  <Icon className='smile'></Icon>{this.props.rating}
                                  <Add id = {this.props.id} name = {this.props.name}
                                    address = {this.props.address} rating = {this.props.rating}
                                    image = {this.props.image} detail={this.props.detail} change={ch}
                                     refresh = {this.refresh}/>
                              </Card.Content>
                        </Card>
    );
  }
}
module.exports = ListItem;
