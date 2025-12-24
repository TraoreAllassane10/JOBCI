import { Route, Routes } from 'react-router-dom'
import Acceuil from './pages/chercheur/Acceuil'
import Login from './pages/auth/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>} />

        <Route path='/' element={<Acceuil/>} />
      </Routes>
    </>
  )
}

export default App
