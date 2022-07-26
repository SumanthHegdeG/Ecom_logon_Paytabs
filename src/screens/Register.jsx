import { useState, useLayoutEffect, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { register, resetError } from '../features/user/userSlice'

const Register = () => {
  const [newUser, setNewUser] = useState({
    email: '',
    name: '',
    password: '',
  })

  const { success, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetError())
  }, [])

  const submit = (e) => {
    e.preventDefault()
    dispatch(register(newUser))
  }

  if (success) {
    console.log(success, error)
    return <Navigate to='/login' />
  }
  console.log(success, error)
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  return (
    <>
      {console.log(success, error)}
      <h1 className='text-center'>Register</h1>
      {error && <h3 className='text-danger text-center'>{error}</h3>}
      <Form>
        <Form.Group className='mb-3' controlId='ControlInput1'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            placeholder='john Doe'
            onChange={handleChange}
            value={newUser.name}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='ControlInput2'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='name@example.com'
            onChange={handleChange}
            value={newUser.email}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='ControlInput3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='enter password'
            onChange={handleChange}
            value={newUser.password}
          />
        </Form.Group>
        <Button type='submit' onClick={submit}>
          submit
        </Button>
      </Form>
    </>
  )
}

export default Register
