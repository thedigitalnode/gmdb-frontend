import React from 'react'

const usersContext = React.createContext({
    users:{},
    setUsers: ()=> {}
});

export default usersContext;