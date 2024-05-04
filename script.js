document.addEventListener('DOMContentLoaded', function() {
    // Establecemos la fecha de inicio para las 15:30 del 13 de enero de 2024
    var fechaInicio = new Date('2024-01-13T06:30:00-03:00'); // Ajustamos la fecha de inicio con la zona horaria de Argentina (GMT-3)
    var contadorElemento = document.getElementById('contador');

    function actualizarContador() {
        var ahora = new Date();
        var diferencia = ahora - fechaInicio;

        // Convertimos la diferencia a segundos
        var segundosRestantes = Math.floor(diferencia / 1000);

        // Calculamos los días, horas, minutos y segundos restantes
        var dias = Math.floor(segundosRestantes / (24 * 60 * 60));
        var horas = Math.floor((segundosRestantes % (24 * 60 * 60)) / (60 * 60));
        var minutos = Math.floor((segundosRestantes % (60 * 60)) / 60);
        var segundos = segundosRestantes % 60;

        // Actualizamos el contador en el HTML
        contadorElemento.innerHTML = dias + ' días, ' + horas + ' horas, ' + minutos + ' minutos, ' + segundos + ' segundos';
    }

    // Actualizamos el contador cada segundo
    setInterval(actualizarContador, 1000);
});
