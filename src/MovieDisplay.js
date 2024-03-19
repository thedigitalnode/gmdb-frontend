import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


function MovieDisplay({ movie }) {

    const { idnumber } = useParams();
    const [movieIndex, setMovieIndex] = useState(0)


    useEffect(() => {
        for (let i = 0; i < movie.length; i++) {
            if (movie[i].movieId === Number(idnumber)) {
                setMovieIndex(i);
            }
        }
    }, [idnumber, movie])

    if (movie === undefined) {
        return (
            <h1>Go home and select a movie</h1>
        )
    } else {
        return (
            <>
                <div className="displayMovieDatacontainer">
                    <div className="imageContainer">
                        <img className="movieImage" src={movie[movieIndex].poster} alt="movieImage" />
                    </div>
                    <div key={movie.movieID} className="dataContainer">
                        <p>{movie[movieIndex].title}</p>
                        <p>{movie[movieIndex].year}</p>
                        <p>{movie[movieIndex].director}</p>
                        <p>{movie[movieIndex].actors}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default MovieDisplay;
