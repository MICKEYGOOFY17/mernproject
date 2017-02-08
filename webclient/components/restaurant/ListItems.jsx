var React = require('react');
import {Card,Icon,Button,Image} from 'semantic-ui-react';


var ListItem=React.createClass({
  render:function(){
    return (
                    <Card style={{marginLeft:25}}>
                            <Image src={this.props.image} style={{height:170}}/>
                            <Card.Content>
                              <Card.Header>
                                {this.props.name}
                              </Card.Header>
                               <Card.Meta>
                                 {this.props.id}
                               </Card.Meta>
                               <Card.Description>
                                 {this.props.address}<br/>Cuisine:{this.props.cuisine}
                               </Card.Description>
                             </Card.Content>
                             <Card.Content extra>
                                  <Icon className="smile"></Icon>{this.props.rating}
                                      <Button size='medium' color='green' floated = 'right'>
                                        <Icon name='add' />
                                        Add to Favourites
                                      </Button>
                              </Card.Content>
                        </Card>
    );
  }
});
module.exports=ListItem;
