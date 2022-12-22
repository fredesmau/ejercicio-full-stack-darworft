import React, { useState, useEffect } from 'react';
import './App.css';
import ListItem from './ListItem';
import axios from "axios";

const baseURL = 'http://localhost:3000/items/items/';


function App() {
  
    
  const [items, setItems] = useState([]);
   
  // useEffect(() => {

  //   axios.get(baseURL).then(function (response) {
  //     // handle success
  //     console.log(response.json());
  //     setItems(response.data);
  //     console.log(response.data);
  //   });

  //   fetch
  
  // }, []);

  useEffect(() => {

    async function fetchItems() {
      const response = await axios.get(baseURL);
      setItems(response.item);
    }

    fetchItems();
  
  }, []);


  
  return (
    <div>
      <h1>Presione el botón para traer los elementos </h1>
      <button>Click me</button>
      <ul>
        {
          items && items.map(item => <ListItem key= {item.id} id= {item.id} name={item.name} lastName={item.lastName} ></ListItem>)
        }
      </ul>
    </div>
  );
}

export default App;
 









// const [items, setItems] = useState([]);

//   const buttonClick = () => {

//     axios.get(baseURL).then(function (response) {
//       // handle success
//       console.log(response);
//       setItems(response.data);
//     });

//   }




