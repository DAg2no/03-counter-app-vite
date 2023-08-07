import PropTypes from 'prop-types'
import { useState } from 'react'
import {Fragment} from 'react'

export const CounterApp = ({ value }) =>{
    const [ counter, setCounter ] = useState( 0 )
    const handleadd = () => {
        setCounter(prevCounter => prevCounter + 1);
      };
    const handleremove = () => {
        setCounter( counter - 1 )
        
    }
    const handlereset = () => {
        setCounter( value )
    };
    return (
        
        <Fragment>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={handleadd}>
            +1
        </button>
        <button onClick={handleremove}>
            -1
        </button>
        <button onClick={handlereset}>
            Reset
        </button>
        </Fragment>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}
CounterApp.defaultProps = {
    value: 0    
}



