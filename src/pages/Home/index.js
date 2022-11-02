import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from '../../components/NavBar/index';
import { HomeBody } from '../../components/HomeBody/index';
import { Footer } from '../../components/Footer/index';
import { Login } from '../../components/Login/index';
import '../../style/App/App.css'

function Home() {
  return (
    <div className="Home">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeBody />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomeBody />} />
        </Routes>
        <Footer/>
      </BrowserRouter>  
    </div>
  );
}

export { Home };