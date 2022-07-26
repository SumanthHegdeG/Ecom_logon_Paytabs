import { createSlice } from '@reduxjs/toolkit'

const users = [
  {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    password: 'johndoe123',
    role: 'customer',
  },
]

const initialState = {
  userInfo: {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    password: 'johndoe123',
    role: 'customer',
  },
  error: null,
  success: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = {}
      state.error = null
      state.success = null
    },

    login: (state, { payload }) => {
      const user = users.find((user) => {
        return (
          user.password === payload.password && user.email === payload.email
        )
      })
      if (user) {
        state.userInfo = user
        state.error = null
      } else state.error = 'wrong email or password'
    },

    setRole: (state, { payload }) => {
      state.userInfo.role = payload
    },

    register: (state, { payload }) => {
      const user = users.find((user) => {
        return user.email === payload.email
      })
      console.log(user)
      if (!user) {
        users.push(payload)
        state.error = null
        state.success = true
      } else state.error = 'Email already exists'
    },

    resetError: (state) => {
      state.error = null
      state.success = null
    },
  },
})

export default userSlice.reducer

export const { logout, login, setRole, register, resetError } =
  userSlice.actions
