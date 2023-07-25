import { useState } from "react"

export const ConditionalRender = () => {

    const [x] = useState(true);

    const [name] =  useState("João");




  return (
    <>

        <h1>Isso será exibido? </h1>    
        {x && <p>Se x for true, sim!</p>}
        {name === "João"? (
          <div>
            <p>O nome é João</p>
          </div>
        ):(
          <div>
            O nome não é {name}
          </div>
        )}

    </>
  )
}
