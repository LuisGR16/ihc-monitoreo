const focoRoom = document.getElementById('foco-room');
const focoHall = document.getElementById('foco-hall');
const ventilador = document.getElementById('ventilador');
const focosGarden = document.querySelectorAll('.garden img');
const cortinas = document.querySelectorAll('.curtains');

const alarma = document.getElementById('alarm');
const sonidoAlarma = document.getElementById('alarmSound');
sonidoAlarma.loop = true;

const cameras = document.querySelectorAll('.camera');
const sonidoCamera = document.getElementById('cameraSound');

export const executeOrder = (order) => {

    // Recámara
    if (order === 'Encendiendo luz de la recámara') {
        focoRoom.setAttribute('src', 'src/img/foco_encendido.png');
    }
    if (order === 'Apagando luz de la recámara') {
        focoRoom.setAttribute('src', 'src/img/foco_apagado.png');
    }

    // Sala
    if (order === 'Encendiendo luz de la sala') {
        focoHall.setAttribute('src', 'src/img/foco_encendido.png');
    }
    if (order === 'Apagando luz de la sala') {
        focoHall.setAttribute('src', 'src/img/foco_apagado.png');
    }

    // Jardín
    if (order === 'Encendiendo luces del jardín') {
        focosGarden.forEach(imagen => {
            // Cambiar el valor del atributo src
            imagen.src = 'src/img/foco_encendido.png';
        });
    }
    if (order === 'Apagando luces del jardín') {
        focosGarden.forEach(imagen => {
            // Cambiar el valor del atributo src
            imagen.src = 'src/img/foco_apagado.png';
        });
    }

    // Ventilador
    if (order === 'Encendiendo el ventilador') {
        ventilador.setAttribute('src', 'src/img/ventilador_on.gif');
    }
    if (order === 'Apagando el ventilador') {
        ventilador.setAttribute('src', 'src/img/ventilador_off.png');
    }
    
    // Cortinas
    if (order === 'Abriendo las cortinas') {
        openCurtains();
    }
    if (order === 'Cerrando las cortinas') {
        closeCurtains();
    }
    
    // Alarma
    if (order === 'Activando la alarma') {
        alarma.setAttribute('src', 'src/img/alarma_activada.gif');

        sonidoAlarma.play();
    }
    if (order === 'Desactivando la alarma') {
        alarma.setAttribute('src', 'src/img/alarma_desactivada.png');
        sonidoAlarma.pause();
    }
    // Cámaras
    if (order === 'Encendiendo cámaras de seguridad') {
        cameras.forEach( imagen => {
            imagen.src = 'src/img/camera_on.png';
        })

        sonidoCamera.play();
    }
    if (order === 'Apagando cámaras de seguridad') {
        cameras.forEach( imagen => {
            imagen.src = 'src/img/camera_off.png';
        })
        sonidoCamera.play();
    }
}

const openCurtains = () => {
    // Cambiar el src a la versión animada del GIF
    cortinas.forEach( imagen => {
        imagen.src = 'src/img/cortinas_abrir.gif';
    })

    // Después de un tiempo, revertir el src a la versión estática
    setTimeout(() => {
        cortinas.forEach( imagen => {
            imagen.src = 'src/img/cortinas_abiertas.png';
        })
    }, 543); // Cambia 5000 por el tiempo de duración del GIF en milisegundos
}

const closeCurtains = () => {
    // Cambiar el src a la versión animada del GIF
    cortinas.forEach( imagen => {
        imagen.src = 'src/img/cortinas_cerrar1.gif';
    })

    // Después de un tiempo, revertir el src a la versión estática
    setTimeout(() => {
        cortinas.forEach( imagen => {
            imagen.src = 'src/img/cortinas_cerradas.png';
        })
    }, 1000); // Cambia 5000 por el tiempo de duración del GIF en milisegundos
}