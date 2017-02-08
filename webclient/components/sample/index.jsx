import React from 'react';
import ReactDOM from 'react-dom';
import Child from './childComponent.jsx';
import Child1 from './childComponent1.jsx';

class ParentComponent extends React.Component {
    constructor() {
        super();
    }
    click(e) {
      this.props.click(e);
    }
    render() {
        return (
            <div>
              <Child name={this.props.name} age={this.props.age}/>
              <Child1 name={this.props.name1} color={this.props.color}/>
              <button onClick={this.click.bind(this,"Chennai")}>Change in Child</button>
            </div>
        )
    }
}

export default ParentComponent;
