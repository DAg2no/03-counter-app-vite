import PropTypes from 'prop-types'

export const FirstApp = ({title, subTitle}) => {

    /* if(!title) {
        throw new Error('el title no existe')
    } */
    // console.log(props)
    return (
        <>
        <h1> { title } </h1>  
        {/* si entendi bien, aca desetructuramos el title y el subtitle para mandarlo a la pagina */}
       <p>{ subTitle }</p> 
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired, /* requerido estrictamente: isRequired */
    subTitle: PropTypes.number,
}
FirstApp.defaultProps = {
    title: 'no hay ningun titulo',
    subTitle: 'no hay subtitle',
}