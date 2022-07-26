import { useState, useLayoutEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { login, resetError } from '../features/user/userSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useLayoutEffect(() => {
    dispatch(resetError())
  }, [])

  const dispatch = useDispatch()

  const { error, userInfo } = useSelector((state) => state.user)

  const submit = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }))
  }

  if (Object.keys(userInfo).length) {
    return <Navigate to='/select-user-category' />
  }

  return (
    <>
      <h1 className='text-center'>Login</h1>
      {error && <h3 className='text-danger text-center'>{error}</h3>}
      <Form>
        <Form.Group className='mb-3' controlId='ControlInput1'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='name@example.com'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='ControlInput2'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='enter password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button type='submit' onClick={submit}>
          submit
        </Button>
      </Form>

      <h6 className='my-4 text-center'>
        <Link to='/register'>Register</Link> An Account
      </h6>
    </>
  )
}

export default Login
