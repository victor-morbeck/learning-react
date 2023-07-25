
import { useState } from "react"

 const ListRender = () => {

    const [name] = useState(["Victor", "Bruno", "Psy"]);
    const [user, setUser] = useState([
        {id:1, name:"Victor", age:22},
        {id:2, name:"Bruno", age:33},
        {id:3, name:"Psy", age:30}
    ]);
    const excludeHandler = () => {
        const randomNumber = Math.floor(Math.random() * user.length+ 1) ;
        setUser((prevUser) => prevUser.filter((user) => randomNumber !== user.id));
        console.log('randomNumber :>> ', randomNumber);
      };


  return (
    <>
        <ul>
            {name.map((name,i) =>(
                <li key={i}>{name}</li>
            ))}
        </ul>

        <ul>  
                {user.map((users) =>(
                    
                    <li key={users.id}>{users.name} -  {users.age}</li>
                ))}
        </ul>
        <button onClick={excludeHandler}>Excluir um nome</button>
    </>
  )
}

export default ListRender