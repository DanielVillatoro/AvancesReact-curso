import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';
//FC

//<fragment>
const PrimeraApp = ({saludo,subtitulo}) => {

    return (
        <Fragment>  
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
            <p>{subtitulo}</p>
        </Fragment>
    );
}

//Validando los argumentos
PrimeraApp.propTypes={
    saludo: PropTypes.string.isRequired //Para determinar el tipo de valor
}

PrimeraApp.defaultProps={
    subtitulo:'Soy un subtitulo'
}


export default PrimeraApp;