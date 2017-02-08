import React from 'react';
import ReactDOM from 'react-dom';
import {Button,Icon,Input,Form} from 'semantic-ui-react';

class ChildComponent extends React.Component {
  constructor() {
        super();
        this.state = {"id" : "" , "cuisine" : ""};
        this.click = this.click.bind(this);
        this.change = this.change.bind(this);
    }
    click(id,cuisine) {
      this.props.click(id,cuisine);
    }
    change(event)
    {
      this.setState({[event.target.name]:event.target.value});
    }
    render() {
        return (
            <div>
              <Form className="ui form">
                <Form.Group><Form.Input type = "text" name = "id" placeholder = "City Id" onChange = {this.change} value = {this.state.id} style = {{marginTop:10}}/>
                <Form.Input type = "text" name = "cuisine" placeholder = "Cuisine" onChange = {this.change} value = {this.state.cuisine} style = {{marginTop:10}}/></Form.Group>
              </Form>
                    <Button size='large' color='blue' style = {{margin:5}} onClick = {this.click.bind(this,this.state.id,this.state.cuisine)}>
                      Search
                      <Icon name='right arrow' />
                    </Button>
            </div>
        )
    }
}

export default ChildComponent;
