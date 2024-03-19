import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import MovieList from './MovieList'
import MovieDisplay from './MovieDisplay'
import SearchedMovies from './SearchedMovies'
import Login from './Login'

const Header = styled.h1`
  text-align: center;`

const HomeBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightgrey;
  padding: 1%;`

const Home = styled.button`
  margin-inline: 5%;
`
const LoginButton = styled.button`
`
const Search = styled.div`
  margin-inline: 5%;
  padding-inline: 5px;
`


function App() {
  const [movieData, setMovieData] = useState([])
  const [searchedMovieData, setSearchedMovieData] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  let navigate = useNavigate()

  const [users, setUsers] = useState([{id:1,name:'John',password:1234},{id:2,name:'Jane',password:9876}])
  const [currentUser, setCurrentUser] = useState({})


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

  function userLogin(name, password){
    for(let i = 0; i<users.length; i++){
      if(users[i].name === name && users[i].password === Number(password)){
        setIsLoggedIn(true)
        setCurrentUser(users[i])
        console.log("login successful");
        navigate('/')
        return true;
      }
    }
    console.log("login fail");
    return false;

  }

  function userLogout(){
    setCurrentUser({});
    setIsLoggedIn(false);

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

          {(isLoggedIn) ?
          <>
            <LoginButton title="Logout" onClick={()=>{userLogout()}}>{currentUser.name}: Logout</LoginButton>
          </>
            :
            <Link to='/login'>
              <LoginButton title="Login">Login</LoginButton>
            </Link>
          }

        </HomeBar>
        <Routes>
          <Route path='/' element={<MovieList movies={movieData} />} />
          <Route path='/search' element={<SearchedMovies searchedQuery={searchedMovieData} authorized={isLoggedIn}/>} />
          <Route path='/login' element={<Login users={users} userlogin={userLogin} />} />
          <Route path='/id/:idnumber' element={<MovieDisplay movie={movieData} authorized={isLoggedIn}/>} />
        </Routes>
    </>

  );
}

export default App;
