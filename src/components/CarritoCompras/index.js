import React from 'react';
import teclado from '../../images/teclado.jpg'
import computador from '../../images/computador.jpg'
import '../../style/components/CarritoCompras.css'

function CarritoCompras(){
    return(
        <div id="main-container">
            <table class="default">
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>cantidad</th>
                        <th>Nombreproducto</th>
                        <th>valor</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tr>
                    <td class="image-product"><img src={teclado}></img></td>
                    <td>1234</td>
                    <td>Mouse</td>
                    <td>2</td>
                    <td>$120.000</td>
                </tr>
                <tr>
                    <td class="image-product"><img src={computador}></img></td>
                    <td>2</td>
                    <td>computador</td>
                    <td>2</td>
                    <td>$1.200.000</td>
                </tr> 
                <tr>
                    <td colspan="4">Total</td>
                    <td>$1.320.000</td>
                </tr>    
            </table> 
            <div class="botones">
                <div class="btn">
                    <bottom>Finaliza Compra</bottom>
                </div>
                 <div class="btn">
                    <bottom>Cancelar</bottom>
                 </div>
            </div>
        </div>
    );
}

export {CarritoCompras}