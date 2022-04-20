import React from 'react';

const Resultado = ({total, cantidad, plazo}) => {
    return ( 
        <div className="resultado">
            <h2>Cotizacion:</h2>
            <p>La cantidad solicitada es: $ {cantidad}</p>
            <p>A paga en: $ {plazo} Meses</p>
            <p>Su pago mensual es de: $ {(total / plazo).toFixed(2)}</p>
            <p>Total a pagar: $ {(total.toFixed(2))}</p>
        </div>
    );
}
 
export default Resultado;