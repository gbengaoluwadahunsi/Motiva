
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage'
import Login from './Components/Login-Logout/Login'
import HowItWorks from  './Components/HowItWorks'
import GetQuotes from './Components/GetQuotes'
import  MakeYourDesigns from './Components/MakeYourDesigns'
import './App.css'


function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/getquotes" element={<GetQuotes />} />
        <Route path="/makedesigns" element={<MakeYourDesigns />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
