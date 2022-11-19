const Form = () => {

    const cadastrarUsuario = (e) => {
        e.preventDefault()   // Para a execução do form e executa o que estiver em seguida
        console.log('Usuario cadastrado!')
    }

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario} >
                <div>
                    <input type="text" placeholder="Digite seu nome" ></input>
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar" ></input>
                </div>
            </form>
        </div>
    )

}

export default Form