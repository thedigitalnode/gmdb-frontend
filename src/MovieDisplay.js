import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const DisplayMovieDatacontainer = styled.div`
  display: flex;
  flex-direction: row;
`
const ImageContainer = styled.div`
  max-width: 400px;
  height: auto;
  padding: 20px;

`
const DataContainer = styled.div`
  max-width: auto;
`
const MovieImage = styled.img`
box-shadow: 0px 0px 20px black;
max-width: 100%;
height: auto;
width: auto;
`
const MovieTextData = styled.p`
font-weight: bold;
`
const MovieTextDataPlot = styled.p`
`

function MovieDisplay({ movie, authorized }) {

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
    } else if (!authorized){
        return <h1>Please Login to View Movie Details</h1>
    } else {
        return (
            <>
                <DisplayMovieDatacontainer>
                    <ImageContainer>
                        <MovieImage src={movie[movieIndex].poster} alt="movieImage" />
                    </ImageContainer>
                    <DataContainer key={movie.movieID}>
                        <MovieTextData>{movie[movieIndex].title}</MovieTextData>
                        <MovieTextData>Year: {movie[movieIndex].year}</MovieTextData>
                        <MovieTextData>Director: {movie[movieIndex].director}</MovieTextData>
                        <MovieTextData>Actors: {movie[movieIndex].actors}</MovieTextData>
                        <MovieTextData>Metascore: {movie[movieIndex].metascore}</MovieTextData>
                        <MovieTextData>IMDB score: {movie[movieIndex].imdbRating}</MovieTextData>
                        <MovieTextDataPlot>Plot: {movie[movieIndex].plot}</MovieTextDataPlot>
                    </DataContainer>
                </DisplayMovieDatacontainer>
            </>
        );
    }
}

export default MovieDisplay;
