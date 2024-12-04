interface product{
  id: number, 
  name: string,
  amount: number,
  unit: string,
  bought: boolean
}
import './App.css'
const productList:product[] = []

function App() {

  const exampleProduct:product = {
    id: 0,
    name: "a",
    amount: 1,
    unit: "b",
    bought: false
  }
   productList.push(exampleProduct)
  MakeTable();





  return;
}
function MakeTable(){
  const tableContent = document.getElementById("dynamicTable");
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
