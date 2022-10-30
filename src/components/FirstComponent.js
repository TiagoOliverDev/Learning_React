function FirstComponent(){
    
    const name = "Tiago"

    return(
        //html chamado de jsx
        //Não podemos ter duas div pai, somente uma e todo o código via dentro dela
        <div className="" >
            <p>Primeiro componente</p>
            <p>Nome: {name}</p>
        </div>
    )

}

export default FirstComponent //Precisamos desse export para poder utilizar esse component dentro de um outro component
