const Evento = (props) => {

    const handleClick = () => {
        console.log(`Evento ativado...${props.numero}`)
    }

    return(
        <div>
            <p>Clique para disparar evento</p>
            <button onClick={handleClick} >Ativar</button>
        </div>
    )

}

export default Evento