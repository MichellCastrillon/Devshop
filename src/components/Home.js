import React from 'react';
import '../style/components/Home.css'
import audifonos from '../images/audifonos.jpg'

function Home (){
    return(
        <>
        <h1 className = "Title">Productos</h1>
        <div className="Productos">
            <div className="producto">
                <a href="#">
                    <div className = "producto-img">
                        <img src= {audifonos}/>
                    </div>
                </a>
                <div className = "producto-footter">
                    <h1>Title</h1>
                    <p>Categoria</p>
                    <p className="Precio">Precio: $ 120.000</p>
                </div>
                <div className="buttom">
                    <button className="btn">
                        Añadir al carrito
                    </button>
                    <div>
                        <a href="#" className="btn">Vista</a>
                    </div>
                </div>
            </div>

            {/* producto 2 */}
            <div className="producto">
                <a href="#">
                    <div className = "producto-img">
                        <img src= {audifonos}/>
                    </div>
                </a>
                <div className = "producto-footter">
                    <h1>Title</h1>
                    <p>Categoria</p>
                    <p className="Precio">Precio: $ 120.000</p>
                </div>
                <div>
                    <button className="btn">
                        Añadir al carrito
                    </button>
                    <div>
                        <a href="#" className="btn">Vista</a>
                    </div>
                </div>
            </div>

            {/* producto3 */}
            <div className="producto">
                <a href="#">
                    <div className = "producto-img">
                        <img src= {audifonos}/>
                    </div>
                </a>
                <div className = "producto-footter">
                    <h1>Title</h1>
                    <p>Categoria</p>
                    <p className="Precio">Precio: $ 120.000</p>
                </div>
                <div>
                    <button className="btn">
                        Añadir al carrito
                    </button>
                    <div>
                        <a href="#" className="btn">Vista</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export {Home}