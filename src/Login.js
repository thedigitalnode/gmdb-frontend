import styled from 'styled-components'
import React, { useState } from 'react';

const LoginContainer = styled.div`
// display: flex;
// flex-wrap: wrap;
// justify-content: space-evenly;
// margin-top: 30px;
`

const Login = ({ users, userlogin }) => {

  const [login, setLogin] = useState(false)

  const passLoginDetails = () => {
    let nameParam = document.getElementById("nameParam").value;
    let passwordParam = document.getElementById("passwordParam").value;
    let loginSuccessful = userlogin(nameParam, passwordParam)
    if (!loginSuccessful) {
      setLogin(true)
    }
  }
  return (
    <LoginContainer>
      <input name="name" id="nameParam" placeholder='Name' />
      <input type="password" name="password" id="passwordParam" placeholder="Password" />
      <input type="submit" value="Submit" onClick={() => passLoginDetails()} />
      {(login) ? <p>Try Again</p>:<></> }
    </LoginContainer>
  )
}

export default Login