import React from 'react';
import '../../style/components/ListaVentas.css'

function ListaVentas(){
    return(
        <div id="main-container">
            <table class="default">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>idVenta</th>
                        <th>Nombreproducto</th>
                        <th>cantidad</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tr>
                    <td>01/11/2022</td>
                    <td>1234</td>
                    <td>Mouse</td>
                    <td>2</td>
                    <td>$120.000</td>
                </tr>
        </table> 
      </div>
    );
}

export { ListaVentas }