import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { NoteProvider } from './componenets/context/Contex.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <NoteProvider>
  <App />
    </NoteProvider>
  </BrowserRouter>
  <ToastContainer position="top-right" autoClose={2000} />

  </>
 
)
