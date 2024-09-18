import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [userInfo, setUserInfo] = useState([])

  useEffect (() => {
    axios.get('/api/userinfo')
    .then((response) => {
      setUserInfo(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])


  return (
    <>
      <h1>User Information</h1>
      <p>UserInfo: {userInfo.length}</p>
      {
         userInfo.map((user) =>  (
            <div key={user.id}>
              <p>ID: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          )
        )
      }
    </>
  )
}

export default App
