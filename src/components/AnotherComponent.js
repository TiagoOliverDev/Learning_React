
const AnotherComponent = () => {
    
    const HandlerClick = () => {
        console.log('Clicando')
    }

    return(
        <div>
            <p>Segundo componente</p>]
            <button onClick={HandlerClick}>Click</button>
            <hr />
            
        </div>
    )
}

export default AnotherComponent;