import React from 'react';
import '../style/components/Home.css'
import audifonos from '../images/audifonos.jpg'
import mouse from '../images/mouse.jpg'
import psp from '../images/psp.jpg'
import tarjetagrafica from '../images/tarjetaGrafica.jpg'
import teclado from '../images/teclado.jpg'
import computador from '../images/computador.jpg'

function Home (){
    return(
        <>
        <h1 className = "Title">Productos</h1>
        <div className="Productos">
            <div className="Producto">
                <a href="#">
                    <div className = "Producto-img">
                        <img src= {audifonos}/>
                    </div>
                </a>
                <div className = "Producto-footer">
                    <h1>Audifonos</h1>
                    <p>Categoria: Accesorios</p>
                    <p className="Precio">Precio: $ 120.000</p>
                </div>
                <div className="Buttom">
                    <div className="Boton">
                        <button>
                            Añadir al carrito
                        </button>
                    </div>
                    <div className="Btn-container">
                        <a href="#" className="Btn">Ver mas</a>
                    </div>
                </div>
            </div>

            {/* producto 2 */}
            <div className="Producto">
                <a href="#">
                    <div className = "Producto-img">
                        <img src= {mouse}/>
                    </div>
                </a>
                <div className = "Producto-footer">
                    <h1>Mouse</h1>
                    <p>Categoria: Computadores</p>
                    <p className="Precio">Precio: $ 120.000</p>
                </div>
                <div className="Buttom">
                    <div className="Boton">
                        <button>
                            Añadir al carrito
                        </button>
                    </div>
                    <div className="Btn-container">
                        <a href="#" className="Btn">Ver mas</a>
                    </div>
                </div>
            </div>
            {/* producto3 */}
            <div className="Producto">
                <a href="#">
                    <div className = "Producto-img">
                        <img src= {psp}/>
                    </div>
                </a>
                <div className = "Producto-footer">
                    <h1>psp</h1>
                    <p>Categoria: Otros</p>
                    <p className="Precio">Precio: $ 9.000</p>
                </div>
                <div className="Buttom">
                    <div className="Boton">
                        <button>
                            Añadir al carrito
                        </button>
                    </div>
                    <div className="Btn-container">
                        <a href="#" className="Btn">Ver mas</a>
                    </div>
                </div>
            </div>
            {/* Producto4 */}
            <div className="Producto">
                <a href="#">
                    <div className = "Producto-img">
                        <img src= {teclado}/>
                    </div>
                </a>
                <div className = "Producto-footer">
                    <h1>Teclado</h1>
                    <p>Categoria: Computadores</p>
                    <p className="Precio">Precio: $ 80.000</p>
                </div>
                <div className="Buttom">
                    <div className="Boton">
                        <button>
                            Añadir al carrito
                        </button>
                    </div>
                    <div className="Btn-container">
                        <a href="#" className="Btn">Ver mas</a>
                    </div>
                </div>
            </div>

            {/* producto 5 */}
            <div className="Producto">
                <a href="#">
                    <div className = "Producto-img">
                        <img src= {computador}/>
                    </div>
                </a>
                <div className = "Producto-footer">
                    <h1>Computador</h1>
                    <p>Categoria: Computadores</p>
                    <p className="Precio">Precio: $ 900.000</p>
                </div>
                <div className="Buttom">
                    <div className="Boton">
                        <button>
                            Añadir al carrito
                        </button>
                    </div>
                    <div className="Btn-container">
                        <a href="#" className="Btn">Ver mas</a>
                    </div>
                </div>
            </div>
            {/* producto 6 */}
            <div className="Producto">
                <a href="#">
                    <div className = "Producto-img">
                        <img src= {tarjetagrafica}/>
                    </div>
                </a>
                <div className = "Producto-footer">
                    <h1>Tarjeta Grafica</h1>
                    <p>Categoria: Repuestos</p>
                    <p className="Precio">Precio: $ 120.000</p>
                </div>
                <div className="Buttom">
                    <div className="Boton">
                        <button>
                            Añadir al carrito
                        </button>
                    </div>
                    <div className="Btn-container">
                        <a href="#" className="Btn">Ver mas</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export {Home}