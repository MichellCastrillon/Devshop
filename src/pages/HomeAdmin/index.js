import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBarAdmin } from '../../components/NavBarAdmin/index';
import { HomeBodyAdmin} from '../../components/HomeBodyAdmin/index';
import { ListaVentas } from '../../components/ListaVentas/index';
import { Footer } from '../../components/Footer/index';


function HomeAdmin(){
    return(
        <div className="HomeAdmin">
            <BrowserRouter>
                <NavBarAdmin />
                <Routes>
                    <Route path="/" element={<HomeBodyAdmin />} />
                    <Route path="/listaventas" element={<ListaVentas />} />
                    <Route path="/homeAdmin" element={<HomeBodyAdmin />} />
                </Routes>
                <Footer/>
            </BrowserRouter>  
        </div>
    );
}

export { HomeAdmin }