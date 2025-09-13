
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CreateNote from './pages/CreateNote'
import Navbar from './componenets/Navbar'
import Footer from './componenets/Footer'

function App() {

  return (
    <div className='flex flex-col min-h-screen bg-gray-900 text-white'>
      <Navbar />
      <main className='flex-1 container mx-auto px-4 '>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/create-note' element={<CreateNote/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
