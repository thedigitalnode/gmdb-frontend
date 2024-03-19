import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MovieListContainer = styled.div`
display: flex;
flex-wrap: wrap;
`

const MovieItem = styled.div`
margin: 10px;
padding 10px;
`

const MovieImage = styled.img`
max-width: 100%;
height: auto;
width: 300px;
`

function MovieDisplay({ searchedQuery, authorized }) {
  const [searchedMovieList, setSearchedMovieList] = useState()

  useEffect(() => {
    fetch(`http://localhost:3001/movies?search=${searchedQuery}`)
      .then(res => res.json())
      .then(data => setSearchedMovieList(data))
  }, [searchedQuery])

  if (!searchedMovieList) {
    return (
      <h1>Go home and select a movie</h1>
    )
  } else if (!authorized) {
    return <h1>Please Login to Search</h1>
  }
  else {
    return (

      <MovieListContainer>
        {
          searchedMovieList.map(movie => (
            <MovieItem key={movie.movieId}>
              <Link to={`/id/${movie.movieId}`} >
                <MovieImage src={`${movie.poster}`} alt={movie.title} />
              </Link>
            </MovieItem>
          ))
        }
      </MovieListContainer>
    );
  }
}

export default MovieDisplay;