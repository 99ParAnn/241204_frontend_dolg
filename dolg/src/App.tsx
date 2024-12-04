import './App.css'
import React, { useState, useRef } from 'react'

interface Product{
  id: number, 
  name: string,
  amount: number,
  unit: string,
  bought: boolean
}
const productList:Product[] = []

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProductName, setNewProductName] = useState("");
  const [newProductAmount, setNewProductAmount] = useState("");
  const [newProductUnit, setNewProductUnit] = useState("");
  const [error, setError] = useState('');
  const [remaining, setRemaining] = useState("");
  const inputRef = useRef<HTMLInputElement>(null); //inputref.current.focus() vhova tudja tenni a kurzort/fókuszt

  const addProduct = () => 
    
    {

      const newProduct = { id: 0, name:newProductName, amount:newProductAmount, unit:newProductUnit, bought: false}
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setNewProductName("");
      setNewProductAmount("");
      setNewProductUnit("");
      setError("");
      setRemaining(remaining+1)

    } 
    //TBA!! 
    //ID WRONG CORRECT LATER
  //hiba: üres érték bármire
  //hiba: már meglevő termék

  const toggleProductComletion = (productID: number) => {
    //t.úr három függvényt hívó függvénnyel csinálta
    //funkcionális a nyavalya
  }

  const removeProduct = (productID: number) =>{
    //filter(), azokra az idkra, amik nincsenek benne a dologban
    //todo: nézz utána a filternek
  }



  const exampleProduct:Product = {
    id: 0,
    name: "alma",
    amount: 3,
    unit: "db",
    bought: false
  }
  productList.push(exampleProduct)
  MakeTable();





  return;
}
function MakeTable(){
  const tableContent = document.getElementById("dynamicTable");
  tableContent!.innerHTML = "";
  productList.forEach(product => {
    const newLine = `
    <tr>
    <td>
    ${product.name}
    </td>
    <td>
    ${product.amount} ${product.unit}
    </td>
    <td>
    Megvásárolva vagy nem
    </td>
    <td>
    Törlés gomb
    </td> 
    </tr>
    `;
    tableContent!.innerHTML += newLine;
  });
}

export default App
