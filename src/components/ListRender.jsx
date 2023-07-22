// import { useState } from "react"

// const ListRender = () => {

//     const [list] = useState(["Matheus", "Pedro", "Josias"]);
//     const [user,setUser] = useState([
//         {id:1, name: "victor", age: 31},
//         {id:2, name: "Maria", age: 35},
//         {id: 3, name:"Carla", age:28}
//     ])




//     const deleteRandom = () => {
//         const randomNumber = Math.floor(Math.random() *4);
//         setUser((prevUser) => {
//             return prevUser.filter((user) => randomNumber != user.id);
//         });
//     };

//     return(

//         <div>
//             <ul>//Primeiro Exemplo de renderizção de listas
//                 {list.map((item, i) => (
//                     <li key={i} className>{item}</li>
//                 ))}
//             </ul>
//              <button onClick={deleteRandom}>Deletar nome</button>
//              <div>
//                 <ul>
//                     {user.map((user) =>(
//                         <li key={user.id}>{user.name} - {user.age}</li>
//                     ))} 
//                 </ul>
//              </div>
//         </div>
//     )}
// export default ListRender
//Lista de nome de pessoas feito dinamicamente com react usando useState hooks





import { useState } from "react"

 const ListRender = () => {

    const [name] = useState(["Victor", "Bruno", "Psy"]);
    const [user, setUser] = useState([
        {id:1, name:"Victor", age:22},
        {id:2, name:"Bruno", age:33},
        {id:3, name:"Psy", age:30}
    ]);
    const excludeHandler = () => {
        const randomNumber = Math.floor(Math.random() * user.length) + 1;
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