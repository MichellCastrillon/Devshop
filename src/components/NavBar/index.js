import React from 'react'
import {Link} from 'react-router-dom'
import '../../style/components/NavBar.css'
import cartIcon from '../../images/cartIcon.svg'
import logo from '../../images/logo.png'

function NavBar (){
    return(
        <React.Fragment>
            <nav>
                {/* <img src={img1} alt="menu" class="menu"/> */}
                <div class="navbar-left">
                <img src={logo} alt="logo" class="logo" />
                <ul>
                    <li>
                        <a href="/">Todos</a>
                    </li>
                    <li>
                        <a href="/">Computadores</a>
                    </li>
                    <li>
                        <a href="/">Accesorios</a>
                    </li>
                    <li>
                        <a href="/">Celulares</a>
                    </li>
                    <li>
                        <a href="/">Repuestos</a>
                    </li>
                    <li>
                        <a href="/">Otros</a>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                </ul>
                </div>

                <div class="navbar-right">
                <ul>
                    <li class="navbar-email">
                        <Link to="/login">Login</Link>
                    </li>
                    <li class="navbar-shopping-cart">
                    <img src={cartIcon} alt="shopping cart" />
                    <div>2</div>
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

export { NavBar };