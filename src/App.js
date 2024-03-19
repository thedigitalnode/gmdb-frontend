import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import MovieList from './MovieList'
import MovieDisplay from './MovieDisplay'
import SearchedMovies from './SearchedMovies'
import './App.css';

const Header = styled.h1`
  text-align: center;`

const HomeBar = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: lightgrey;
  padding: 1%;
  align-items: center;`

const Home = styled.button`
  margin-inline: 5%;
`
const Search = styled.div`
  margin-inline: 5%;
  text-align: right;
  padding-inline: 5px;
`

function App() {
  const [movieData, setMovieData] = useState([])
  const [searchedMovieData, setSearchedMovieData] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then(res => res.json())
      .then(data => setMovieData(data))
  }, [])

  function searchForMovie() {
    let searchParam = document.getElementById("searchParam");
    setSearchedMovieData(searchParam.value)
    navigate(`/search`)
  }

  return (

    <>
      <Header>GMDB</Header>
      <HomeBar>
        <Link to='/'>
          <Home title='home'>Home</Home>
        </Link>
        <Search>
          <input name="myInput" id="searchParam" placeholder='Search' />
          <input type="submit" value="Submit" onClick={() => searchForMovie()} />
        </Search>
      </HomeBar>
      <Routes>
        <Route path='/' element={<MovieList movies={movieData} />} />
        <Route path='/search' element={<SearchedMovies searchedQuery={searchedMovieData} />} />
        <Route path='/id/:idnumber' element={<MovieDisplay movie={movieData} />} />
      </Routes>
    </>

  );
}

export default App;
