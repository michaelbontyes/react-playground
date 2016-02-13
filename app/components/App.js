import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps ={
  txt: 'this is the default txt yo'
}

ReactDOM.render(
  <App cat={5} />,
  document.getElementById('app')
);

// class App extends React.Component {
//   render(){
//     return React.createElement('h1', null, 'Hello H!')
//   }
// }
//
// // const App = () => <h1>Hello toto</h1>
//
// // class App extends React.Component {
// //   render(){
// //     //return <h1>Hello toto</h1> <b>BOLD</b>
// //     return React.createElement
// //   }
// // }
//
//
// export default App
