import React from 'react';
import {Button, Icon, Input} from 'semantic-ui-react';

class ChildComponent extends React.Component {
  constructor() {
        super();
        this.state = {'location' : '' ,'cuisine' : ''};
        this.click = this.click.bind(this);
        this.change = this.change.bind(this);
    }
    click(location, cuisine) {
      this.props.click(location, cuisine);
    }
    change(event)
    {
      this.setState({[event.target.name]: event.target.value});
    }
    render() {
        return (
            <div>
              <Input type = 'text' name = 'location' placeholder = 'City Id'
                 onChange = {this.change} value = {this.state.location} style = {{marginTop: 10}}/>
                <Input type = 'text' name = 'cuisine' placeholder = 'Cuisine'
                   onChange = {this.change} value = {this.state.cuisine} style = {{marginTop: 10}}/>
                  <Button size='large' color='blue' style = {{margin: 5}}
                    onClick = {this.click.bind(this, this.state.location, this.state.cuisine)}>
                    Search
                    <Icon name='right arrow' />
                  </Button>
            </div>
        );
    }
}

export default ChildComponent;
