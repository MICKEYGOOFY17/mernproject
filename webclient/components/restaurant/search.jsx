import React from 'react';
import {Button, Icon, Input} from 'semantic-ui-react';
import $ from 'jquery';

class ChildComponent extends React.Component {
  constructor() {
        super();
        this.state = {'location' : '' , 'cuisine' : ''};
        this.click = this.click.bind(this);
        this.change = this.change.bind(this);
    }
    click(location, cuisine) {
      this.props.click(location, cuisine);
      $('input[type="text"]').val('');
    }
    change(event)
    {
      this.setState({[event.target.name]: event.target.value});
    }
    render() {
        return (
            <div style={{marginLeft:300}}>
              <Input type = 'text' name = 'location' placeholder = 'City Name'
                 onChange = {this.change} style = {{marginTop: 10, marginRight: 10}}/>
                <Input type = 'text' name = 'cuisine' placeholder = 'Cuisine'
                   onChange = {this.change} style = {{marginTop: 10}}/>
                  <Button size='large' color='blue' style = {{margin: 10}}
                    onClick = {this.click.bind(this, this.state.location, this.state.cuisine)}>
                    Search
                    <Icon name='right arrow' />
                  </Button>
            </div>
        );
    }
}

export default ChildComponent;
