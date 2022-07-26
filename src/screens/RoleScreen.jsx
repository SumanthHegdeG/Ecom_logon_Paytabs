import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setRole } from '../features/user/userSlice'
import { Form, Button } from 'react-bootstrap'
const RoleScreen = () => {
  const [role, updateRole] = useState('')
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleClick = (e) => {
    updateRole(e.target.value)
  }

  const submit = (e) => {
    dispatch(setRole(role))
    navigate('/')
  }
  return (
    <div>
      <div className='mb-4'>
        <Form.Check
          type={'radio'}
          name='role'
          id='customer'
          value='Customer'
          onClick={handleClick}
          label='Customer'
        />
      </div>
      <div className='mb-4'>
        <Form.Check
          type={'radio'}
          name='role'
          id='merchant'
          value='Merchant'
          onClick={handleClick}
          label='Merchant'
        />
      </div>
      <Button onClick={submit}>Submit</Button>
    </div>
  )
}

export default RoleScreen
