import React from 'react';

function MovieFormat(props)
{

    let movie = props.movie;
    const MOVIE_URL = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

    return (
        <>
            <div className="col mb-3" >
                <div className="card h-100 position-relative">
                    <img src= {MOVIE_URL} className="card-img-top book-img mx-auto pt-1" const altText = {movie.title} />
                    <div className="card-body book-card-details" >
                        <h5 className="card-title release-date">RELEASE DATE: {movie["release_date"]}</h5>
                        <h5 className="card-title movie-title">{movie.title} <span className="badge position-absolute top-0 start-0 rounded-pill translate-middle bg-primary">{movie["vote_average"]}</span>
                        </h5>
                        <p className="card-text">{movie["overview"]}</p>
                    </div>

                </div>
            </div>

        </>
    );
}

export default MovieFormat;