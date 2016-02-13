import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  render(){
    return <Button>I <Heart/> React</Button>
  }
}

class Button extends React.Component {
  render() {
    return <button className="uk-button">{this.props.children}</button>
  }
}

const Heart = () => <i className="uk-icon-heart"></i>

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
