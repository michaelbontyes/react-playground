import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(){
    super();
<<<<<<< HEAD
<<<<<<< HEAD
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount(){
    console.log('mounting')
  }
  render(){
    console.log('rendering!')
    return <button onClick={this.update}>{this.state.val}</button>
  }
  componentDidMount(){
    console.log('mounted')
  }
  componentWillUnmount(){
    console.log('bye!')
  }
}

class Wrapper extends React.Component {
  constructor(){
    super();
  }
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
  return (
=======
    this.state = {txt: ''}
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render() {
    return(
      <div>
      <input type="text"
        onChange={this.update.bind(this)} />
        <Widget txt={this.state.txt} />
        <Widget txt={this.state.txt} />
        <Widget txt={this.state.txt} />
        </div>
    );
  }
}

=======
    this.state = {txt: ''}
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render() {
    return(
      <div>
      <input type="text"
        onChange={this.update.bind(this)} />
        <Widget txt={this.state.txt} />
        <Widget txt={this.state.txt} />
        <Widget txt={this.state.txt} />
        </div>
    );
  }
}

>>>>>>> parent of 01df68a... refs
const Widget = (props) => {
  return(
>>>>>>> parent of 01df68a... refs
    <div>
      <button onClick={this.mount.bind(this)}>Mount</button>
      <button onClick={this.unmount.bind(this)}>Unmount</button>
      <div id="a"></div>
    </div>
    )
  }
}


ReactDOM.render(
  <Wrapper/>,
  document.getElementById('app')
);
