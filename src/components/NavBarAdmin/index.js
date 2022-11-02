import React from 'react'
import {Link} from 'react-router-dom'
import '../../style/components/NavBar.css'
import cartIcon from '../../images/cartIcon.svg'
import logo from '../../images/logo.png'

function NavBarAdmin (){
    return(
        <React.Fragment>
            <nav>
                {/* <img src={img1} alt="menu" class="menu"/> */}
                <div class="navbar-left">
                <img src={logo} alt="logo" class="logo" />
                <ul>
                    <li>
                        <a href="/">Lista productos</a>
                    </li>
                    <li>
                        <a href="/">Modificar productos</a>
                    </li>
                    <li>
                        <Link to="/listaventas">Lista ventas</Link>
                    </li>
                    <li>
                        <Link to="/homeAdmin">Home</Link>
                    </li>
                </ul>
                </div>

                {/* <div class="desktop-menu inactive">
                    <ul>
                    <li>
                        <a href="/" class="title">My orders</a>
                    </li>
                
                    <li>
                        <a href="/">My account</a>
                    </li>
                
                    <li>
                        <a href="/">Sign out</a>
                    </li>
                    </ul>
                </div> */}

                {/* <div class="mobile-menu inactive">
                    <ul>
                        <li>
                        <a href="/">CATEGORIES</a>
                        </li>
                        <li>
                        <a href="/">All</a>
                        </li>
                        <li>
                        <a href="/">Clothes</a>
                        </li>
                        <li>
                        <a href="/">Electronics</a>
                        </li>
                        <li>
                        <a href="/">Furnitures</a>
                        </li>
                        <li>
                        <a href="/">Toys</a>
                        </li>
                        <li>
                        <a href="/">Other</a>
                        </li>
                    </ul>
                
                    <ul>
                        <li>
                        <a href="/">My orders</a>
                        </li>
                        <li>
                        <a href="/">My account</a>
                        </li>
                    </ul>
                
                    <ul>
                        <li>
                        <a href="/" class="email">Account</a>
                        </li>
                        <li>
                        <a href="/" class="sign-out">Sign out</a>
                        </li>
                    </ul>
                </div> */}
            </nav>
        </React.Fragment>
    );
}

export { NavBarAdmin };