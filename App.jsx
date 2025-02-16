// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React,{ lazy,Suspense} from 'react'

import Navbar2 from './Components/Navbar/Navbar2.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Copyright from './Components/Footer/Copyright.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Carousel from './Components/Carousel/Carousel.jsx'
// import Pravachan from './Components/Pravachan/Pravachan.jsx'
import About from './Components/Abouts/About.jsx'
import Azx from './Components/azx.jsx'
const LazyIframe=lazy(() =>import("./Components/Pravachan/Pravachan.jsx"))
function App() {
  return (
    <div>

    < Navbar/>
    <Navbar2/>
    <Azx/>
    <About/>
    <Suspense fallback={<p>Loading Images...</p>}>
    <LazyIframe/>
    <LazyIframe/>
    <LazyIframe/>
    <LazyIframe/>
    </Suspense>
    {/* <Pravachan/>
    <Pravachan/>
    <Pravachan/>
    <Pravachan/> */}
    <Carousel/>
    <Footer/>
    <Copyright />
    </div>
  )
}

export default App;
