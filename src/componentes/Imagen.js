import React from 'react';


const Imagen = (props) => {

    const { largeImageURL, likes, previewURL, tags, views } = props.imagen;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <a href={largeImageURL} rel="noopener noreferrer"><img src={previewURL} alt={tags} className="card-img-top image-fluid"/></a>
            </div>
            <div className="card-body">
                <p className="card-text">{likes} Me gusta</p>
                <p className="card-text">{views} Vistas</p>
                
            </div>
        </div>
    )

}
export default Imagen;