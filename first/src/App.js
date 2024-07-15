import './App.css';
import React, { useState } from 'react';

const App = () => {
  let [items, setItems] = useState([
    {id: 1, name:"Apple", price:"3"},
    {id: 2, name:"Banana", price:"2"}
  ])

  let add = (name, price) => {
    let id = items.length + 1;

    setItems([
      ...items,
      {id, name, price}
    ])
  }

  return (
    <div>
      <h1>Hello React</h1>
      <ul>{items.map(i => <Item key={i.id} name={i.name} price={i.price} />)}</ul>
      <AddForm add={add} />
    </div>
  );
}

const AddForm = props => {
  let nameRef = React.createRef();
  let priceRef = React.createRef();

  let add = () => {
    let name = nameRef.current.value;
    let price = priceRef.current.value;

    props.add(name, price);
  }

  return (
    <div>
      <input type='text' ref={nameRef} /><br />
      <input type='text' ref={priceRef} /><br />
      <button onClick={add}>Add</button>
    </div>
  )
}

const Item = props => <li>{props.name}, ${props.price}</li>;

export default App;
