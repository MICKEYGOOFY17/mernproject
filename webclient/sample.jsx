import React from 'react';
import ReactDOM from 'react-dom';
import Child from './components/sample';

class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {name : "yuva"};
        this.onClick = this.onClick.bind(this);
    }
    onClick(a)
    {
      this.setState({name : a});
    }

    static defaultProps= {nam:'John Doe'};


    render() {
      return (
            <div>
                <h1>React App</h1>
                <h2>Hello from React</h2>
                <Child name={this.state.name} age="21" name1={this.props.nam} color="blue" click={this.onClick}/>
                <button onClick={this.onClick.bind(this,"shree")}>Affects parent and child</button>
            </div>
        )
    }

}
ReactDOM.render(
    <MainComponent/>, document.getElementById('mountapp'));
