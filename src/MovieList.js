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

const MovieList = ({ movies }) => {

  return (
    <MovieListContainer>
      {
        movies.map(movie => (
          <MovieItem key={movie.movieId}>
            <Link to={`/id/${movie.movieId}`} >
              <MovieImage src={`${movie.poster}`} alt={movie.title} />
            </Link>
          </MovieItem>
        ))
      }
    </MovieListContainer>
  )
}

export default MovieList