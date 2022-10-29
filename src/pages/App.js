import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from '../components/NavBar.js';
import { Home } from '../components/Home.js';
import { Footer } from '../components/Footer.js';
import { Login } from '../components/Login.js';
import '../style/App/App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>  
    </div>
  );
}

export default App;
