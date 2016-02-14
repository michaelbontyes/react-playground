import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = { data: [
    {id: 1, name: "Mic"},
    {id: 2, name: "Alice"},
    {id: 3, name: "Simon"},
    {id: 4, name: "Alix"}
    ]}
  }
  render(){
      let rows = this.state.data.map( person => {
        return <PersonRow key={person.id} data={person} />
      })
      return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
