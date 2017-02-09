let React = require('react');
import {Card, Icon, Image} from 'semantic-ui-react';
import Add from './button.jsx';


let ListItem = React.createClass({
  render: function() {
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
                               </Card.Description>
                             </Card.Content>
                             <Card.Content extra>
                                  <Icon className='smile'></Icon>{this.props.rating}
                                  <Add id = {this.props.id} name = {this.props.name}
                                    address = {this.props.address} rating = {this.props.rating}
                                    image = {this.props.image} detail={this.props.detail}/>
                              </Card.Content>
                        </Card>
    );
  }
});
module.exports = ListItem;
