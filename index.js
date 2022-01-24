/*
La compañía de servicio de gas de la municipalidad, cobra $50.000 mensuales de cuota y $550
por cada metro cúbico de gas consumido.
a) Calcular la función que proporciona el costo de la factura mensual de gas de cualquier usuario
en función del consumo de metro cúbico de gas.
b) ¿Cuál sería el costo de un mes en el cliente que ha consumido 55 metros cúbicos de gas? ¿Y
si son 85 metros cúbicos de gas?
c) Si la factura del mes de octubre fue de $160.600 ¿cuántos metros cúbicos de gas consumió el
cliente?
*/


/* Esta funcion  calcula  el costo de la factura mensual de gas de cualquier usuario
*/
 function CostoMensualFacturaDeGas(metroscubicos){return 50000+(metroscubicos*550)};
 console.log (CostoMensualFacturaDeGas(55));
 console.log (CostoMensualFacturaDeGas(85));

/*
 Esta funcion  calcula el numero de metros cúbicos de gas consumidos por cualquier 
cliente
*/

function  ConsumoDeMetrosCubicos(costomesnsualfacturadegas){return (costomesnsualfacturadegas-50000)/550}

console.log(ConsumoDeMetrosCubicos(160600).toFixed(0)); 