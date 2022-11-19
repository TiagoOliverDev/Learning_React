import PropTypes from 'prop-types'

const Item = (props) => {

    return(
        <>
            <li>
                {props.marca} - {props.ano_lançamento} 
            </li>
        </>
    )
}

//definindo tipagem na props
Item.propTypes = {
    marca: PropTypes.string,
    ano_lançamento: PropTypes.number
}

//defininco valor dafault para caso não seja passado nenhum valor na props
Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lançamento: 0
}

export default Item