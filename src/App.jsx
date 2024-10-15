import './App.css'
import  Login  from "./components/Login"
import { Dashboard } from './pages/Dashboard'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <div className='App'>
        <Routes>
        
         <Route path='/'  element={<Dashboard />}/> 

        </Routes>
        </div>
        </BrowserRouter>
    </>
  )
}

export default App
