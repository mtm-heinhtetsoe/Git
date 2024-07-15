import logo from './logo.svg';
import './App.css';
import React from 'react';

class Application extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();

  state = {
    items: [
      {id: 1, name:"Apple", price:"3"},
      {id: 2, name:"Banana", price:"2"}
    ]
  }

  add = () => {
    let id = this.state.items.length + 1;
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.setState({
      items: [
        ...this.state.items,
        {id, name, price}
      ]
    })
  }

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          {
            this.state.items.map(i => <Item key={i.id} name={i.name} price={i.price} />)
          }
        </ul>
        <input type='text' ref={this.nameRef} /><br />
        <input type='text' ref={this.priceRef} /><br />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    return <li>{this.props.name}, ${this.props.price}</li>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Application;
