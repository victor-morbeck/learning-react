
import {useState} from 'react';
const ManageData = () => {

var someData = 12;
const [number, setNumber] = useState(someData)

  return (
    <div>ManageData
        <p>valor : {someData}</p>
        <button onClick={()=> someData = 25}>Mudar Variável</button>
        <div>
            <p>Valor : {number}</p>
            <button onClick={()=>setNumber(25)}>Mudar variavel com hooks</button>
        </div>
    </div>
  )
}

export default ManageData