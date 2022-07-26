import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register'
import RoleScreen from './screens/RoleScreen'

function App() {
  const { name } = useSelector((state) => state.user.userInfo)

  return (
    <div>
      <BrowserRouter>
        <div className='d-flex justify-content-center vh-100 align-items-center'>
          <div className='col-lg-4 col-md-6 col-sm-11 p-4 shadow-lg rounded-3 border'>
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/select-user-category' element={<RoleScreen />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
