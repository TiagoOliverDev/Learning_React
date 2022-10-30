const RenderCond = ({ x, y }) => {

    //const x = 7
    
    return(
        <div>
            {/* Verificações dentro do html */}
            {x > 5 && <p>X é maior que 5</p>}
            {y > 1 && <p>Y é maior que 1, seu valor é {y}</p>}
        </div>
    )
}

export default RenderCond