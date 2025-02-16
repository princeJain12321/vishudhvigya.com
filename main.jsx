import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar2 from './Components/Navbar/Navbar2.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Copyright from './Components/Footer/Copyright.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Carousel from './Components/Carousel/Carousel.jsx'
import Pravachan from './Components/Pravachan/Pravachan.jsx'
import About from './Components/Abouts/About.jsx'
import Azx from './Components/azx.jsx'
// import Azx from './Components/Azx.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
