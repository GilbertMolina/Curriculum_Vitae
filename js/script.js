$(function() {
    $("#formulario_InformacionPersonal").sisyphus({
        autoRelease: true
    });
});

$(function() {
    $("#formulario_InformacionAcademica").sisyphus({
        autoRelease: true
    });
});

$(function() {
    $("#formulario_InformacionProfesional").sisyphus({
        autoRelease: true
    });
});

$(function() {
    $("#formulario_resumen").sisyphus({
        autoRelease: true
    });
});

function deshabilitarFechaFinal() {
    var laborandoActualmente = document.getElementById('laborandoActualmente');
    var fechaFinal = document.getElementById('fechaFinal');
    if (laborandoActualmente.checked === true) {
        fechaFinal.disabled = true;
    } else {
        fechaFinal.disabled = false;
    }
}

function actualizarDatos() {
    //Informacion Personal
    document.getElementById("nuevoNombreCompleto").innerHTML = document.getElementById("nombreCompleto").value;
    document.getElementById("nuevaFechaNacimiento").innerHTML = document.getElementById("fechaNacimiento").value;
    document.getElementById("nuevaProfesion").innerHTML = document.getElementById("profesion").value;
    document.getElementById("nuevoTelefono").innerHTML = document.getElementById("telefono").value;
    document.getElementById("nuevoEmail").innerHTML = document.getElementById("email").value;
    document.getElementById("nuevaEscolaridad").innerHTML = obtenerValorEscolaridad();
    document.getElementById("nuevoEstadoCivil").innerHTML = obtenerValorEstadoCivil();
    document.getElementById("nuevaDireccion").innerHTML = document.getElementById("direccion").value;
    document.getElementById("nuevoNivelIngles").innerHTML = document.getElementById("nivelIngles").value;
    //Informacion Academica
    document.getElementById("nuevoTituloPrimaria").innerHTML = document.getElementById("tituloObtenidoPrimaria").value;
    document.getElementById("nuevoLugarTituloPrimaria").innerHTML = document.getElementById("lugarPrimaria").value;
    document.getElementById("nuevoTituloSecundaria").innerHTML = document.getElementById("tituloObtenidoSecundaria").value;
    document.getElementById("nuevoLugarTituloSecundaria").innerHTML = document.getElementById("lugarSecundaria").value;
    document.getElementById("nuevoTituloUniversitario").innerHTML = document.getElementById("tituloObtenidoUniversitario").value;
    document.getElementById("nuevoLugarTituloUniversitario").innerHTML = document.getElementById("lugarUniversitario").value;
    document.getElementById("nuevoOtrosTitulos").innerHTML = document.getElementById("tituloObtenidoOtrosEstudios").value;
    document.getElementById("nuevoLugarOtrosTitulos").innerHTML = document.getElementById("lugarOtrosEstudios").value;
    //Informacion Profesional
    document.getElementById("nuevoTrabajoAnterior").innerHTML = document.getElementById("trabajoAnterior").value;
    document.getElementById("nuevaFechaInicial").innerHTML = document.getElementById("fechaInicial").value;
    document.getElementById("nuevoLaborandoActualmente").innerHTML = obtenerValorLaborandoActualmente();
    document.getElementById("nuevaFechaFinal").innerHTML = obtenerValorFechaFinal();
}

function obtenerValorEscolaridad() {
    var escolaridad = document.getElementById("escolaridad").value;
    var nuevoValorEscolaridad;
    if (escolaridad === "pri") {
        nuevoValorEscolaridad = "Primaria";
    } else if (escolaridad === "sec") {
        nuevoValorEscolaridad = "Secundaria";
    } else if (escolaridad === "bach") {
        nuevoValorEscolaridad = "Bachillerato Universitario";
    } else {
        nuevoValorEscolaridad = "";
    }
    return nuevoValorEscolaridad;
}

function obtenerValorEstadoCivil() {
    var radiosEstadoCivil = document.getElementsByName("radio-action");
    var radioEstadoCivilMarcado;
    for (var i = 0; i < radiosEstadoCivil.length; i++) {
        if (radiosEstadoCivil[i].checked) {
            radioEstadoCivilMarcado = i;
        }
    }
    return radiosEstadoCivil[radioEstadoCivilMarcado].value;
}

function obtenerValorLaborandoActualmente() {
    var laborandoActualmente = document.getElementById('laborandoActualmente');
    var valorlaborandoActualmente;
    if (laborandoActualmente.checked === true) {
        valorlaborandoActualmente = "Sí";
    } else {
        valorlaborandoActualmente = "No";
    }
    return valorlaborandoActualmente;
}

function obtenerValorFechaFinal() {
    var fechaFinal;
    if (obtenerValorLaborandoActualmente() === "Sí") {
        fechaFinal = "N/A";
    } else {
        fechaFinal = document.getElementById("fechaFinal").value;
    }
    return fechaFinal;
}

function enviarCorreo() {
    var nombre = document.getElementById("nombreCompleto").value;
    var para = document.getElementById("paraCorreo").value;
    var cc = document.getElementById("ccCorreo").value;
    var cco = document.getElementById("ccoCorreo").value;
    var asunto;
    if (nombre === "") {
        asunto = "Curriculum Vitae de Anónimo";
    } else {
        asunto = "Curriculum Vitae de " + nombre;
    }
    var cuerpo = formarCuerpoCorreo();
    var mensaje = "mailto:" + para + "?cc=" + cc + "&bcc=" + cco + "&subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo);
    window.location = mensaje;
}

function formarCuerpoCorreo() {
    var nombre = document.getElementById("nombreCompleto").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var profesion = document.getElementById("profesion").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var escolaridad = obtenerValorEscolaridad();
    var estadoCivil = obtenerValorEstadoCivil();
    var direccion = document.getElementById("direccion").value;
    var nivelIngles = document.getElementById("nivelIngles").value;
    var tituloPrimaria = document.getElementById("tituloObtenidoPrimaria").value;
    var lugarTituloPrimaria = document.getElementById("lugarPrimaria").value;
    var tituloSecundaria = document.getElementById("tituloObtenidoSecundaria").value;
    var lugarTituloSecundaria = document.getElementById("lugarSecundaria").value;
    var tituloUniversitario = document.getElementById("tituloObtenidoUniversitario").value;
    var lugarTituloUniversitario = document.getElementById("lugarUniversitario").value;
    var otrosTitulos = document.getElementById("tituloObtenidoOtrosEstudios").value;
    var lugarOtrosTitulos = document.getElementById("lugarOtrosEstudios").value;
    var trabajoAnterior = document.getElementById("trabajoAnterior").value;
    var fechaInicialTrabajoAnterior = document.getElementById("fechaInicial").value;
    var laborandoActualmente = obtenerValorLaborandoActualmente();
    var fechaFinalTrabajoAnterior = obtenerValorFechaFinal();
    var cuerpoTerminado = "Buenas,\n\n" +
                          "Información Personal\n" +
                          "Nombre completo: " + nombre + ".\n" +
                          "Fecha de nacimiento: " + fechaNacimiento + ".\n" +
                          "Profesión: " + profesion + ".\n" +
                          "Teléfono: " + telefono + ".\n" +
                          "Email: " + email + ".\n" +
                          "Escolaridad: " + escolaridad + ".\n" +
                          "Estado civil: " + estadoCivil + ".\n" +
                          "Dirección: " + direccion + ".\n" +
                          "Nivel de Inglés: " + nivelIngles + ".\n\n" +
                          "Información Academica\n" +
                          "Título de Primaria: " + tituloPrimaria + ".\n" +
                          "Lugar: " + lugarTituloPrimaria + ".\n" +
                          "Título de Secundaria: " + tituloSecundaria + ".\n" +
                          "Lugar: " + lugarTituloSecundaria + ".\n" +
                          "Título Universitario: " + tituloUniversitario + ".\n" +
                          "Lugar: " + lugarTituloUniversitario + ".\n" +
                          "Otros Títulos: " + otrosTitulos + ".\n" +
                          "Lugar: " + lugarOtrosTitulos + ".\n\n" +
                          "Información Profesional\n" +
                          "Trabajo anterior: " + trabajoAnterior + ".\n" +
                          "Fecha Inicial: " + fechaInicialTrabajoAnterior + ".\n" +
                          "Laborando actualmente: " + laborandoActualmente + ".\n" +
                          "Fecha Final: " + fechaFinalTrabajoAnterior + ".\n\n" +
                          "Saludos cordiales";
    return cuerpoTerminado;
}
