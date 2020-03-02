import React from 'react';

const Paginacion = (props) => {
    return (
        <div className="py-3">
            <button onClick={props.paginaAnterior} type="button" className="btn btn-info btn-lg mr-5">&larr; </button>
            <button onClick={props.paginaSiguiente} type="button" className="btn btn-info btn-lg"> &rarr;</button>
        </div>
    )
}

export default Paginacion;
