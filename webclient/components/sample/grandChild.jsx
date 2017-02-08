import React from 'react';
import ReactDOM from 'react-dom';

export class GrandChild extends React.Component {
    constructor() {
        super();
        this.state = {grand : "chooda"}
    }
    onClick()
    {
      this.setState({grand : "choodamani"});
    }

    render()
    {
        let color = this.props.color;

        return (
            <div>
                <h2 style={{color : color}}>Hello from {this.state.grand} of age {this.props.age} and brother {this.props.name}</h2>
                <button onClick={this.onClick.bind(this)}>Private change only for grand</button>
            </div>
        )
    }
}
