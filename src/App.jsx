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

// export default 

import react from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import About from './pages/AboutPage';
import Courses from './pages/Courses';
import Contact from './pages/ContactPage';
import './App.css'
import Admission from './pages/AdmissionsPage';
import ChatbotComponent from './components/Chatbot/ChatbotComponents';
import NotFoundPage from './pages/NotFoundPage';
import { useState } from 'react';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';



const App =() =>{

    const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return(
        <>
          <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Pranali sanjay modgekar"
          studentPhotoUrl="/Images/pranali.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path='/courses'element={<Courses/>}/>
                    <Route path='/contact'element={<Contact/>}/>
                    <Route path='/admission'element={<Admission/>}/>
                    <Route path='*'element={<NotFoundPage/>}/>
                 </Routes>
                 <ChatbotComponent />
            </Router>

        </div>
        </>
    )
}
 export default App;

