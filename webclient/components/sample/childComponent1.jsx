import React from 'react';
import ReactDOM from 'react-dom';
import {GrandChild} from './grandChild.jsx';

class ChildComponent1 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h2>Hello from Another Child </h2>
                <GrandChild name={this.props.name} age="15" color={this.props.color}/>
            </div>
        )
    }
}

export default ChildComponent1;
