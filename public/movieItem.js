import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = (props) => {
    return(
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."></img>
                <div className="card-body p-4">
                    <h5 className="fw-bolder">{props.movie.title}</h5>
                    $40.00 - $80.00
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent"></div>
            <div className="text-center"><link className="btn btn-outline-dark mt-auto" to="/details">view details</link>
            </div>
        </div>
    )
}
export default MovieItem;