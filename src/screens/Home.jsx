import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/user/userSlice'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { name, role } = useSelector((state) => state.user.userInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
      <div>
        <h1>Welcome {name}</h1>
        <h3>Selected User Category : {role}</h3>
        <Button
          onClick={() => {
            dispatch(logout())
            navigate('/login')
          }}
        >
          Logout
        </Button>
      </div>
    </>
  )
}

export default Home
