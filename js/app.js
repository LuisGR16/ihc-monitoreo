import { executeOrder } from "./executeOrder.js";
import { lastOrder } from "./lastOrder.js";

let ultimaOrdenConocida = null; // Variable para almacenar la última orden conocida

// Función para actualizar la orden si es diferente de la última conocida
const actualizarOrden = async () => {
    const { value } = await lastOrder();
    if (value.order !== ultimaOrdenConocida) { // Verificar si la nueva orden es diferente
        ultimaOrdenConocida = value.order; // Actualizar la última orden conocida
        console.log( ultimaOrdenConocida )
        executeOrder( value.order ); // Ejecutar la nueva orden
    }
};

// Llamar a la función actualizarOrden() cada 2 segundos usando setInterval()
setInterval(actualizarOrden, 2000);

// Llamar a la función actualizarOrden() inicialmente
actualizarOrden();