import { useEffect } from "react"
import { useState } from "react"

const Hooks = () => {
    //Hooks servem para gerenciar estados

    //novaIdade será o acesso a essa variável e setNovaIdade será a variação, a mudança
    const [novaIdade, setNovaIdade] = useState(22) //Estado hook com valor inicial 22

    const changeNewAge = () => {
        setNovaIdade(23)
    }
    
    useEffect(() => {
        console.log("Testando")
    })

    return(
        <div>
            <p>idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar nova idade</button>
        </div>
    )
}


export default Hooks