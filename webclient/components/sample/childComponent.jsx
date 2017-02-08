import React from 'react';
import ReactDOM from 'react-dom';

class ChildComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h2>Hello from {this.props.name} of age {this.props.age}</h2>
            </div>
        )
    }
}

export default ChildComponent;
