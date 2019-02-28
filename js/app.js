var calculadora = {
    resultado: 0,
    visor: document.getElementById("display"),
    valorVisor: "0",
    operacion: "",
    numero1: 0,
    numero2: 0,
    operacion: "",
    auxTeclaIgual: false,
    ultimoValor: 0,


    actualizarResultado: function(nuevoResultado) {
        resultado = nuevoResultado;
    },

    asignarEventosTeclas: function(selector) {
        var x = document.querySelectorAll(selector);
        for (var i = 0; i < x.length; i++) {
            x[i].onmousedown = this.eventoPresionaBoton;
            x[i].onmouseup = this.eventoRestauraBoton;
        };
    },

    eventoPresionaBoton: function(event) {
        calculadora.presionaBoton(event.target);
    },

    eventoRestauraBoton: function(event) {
        calculadora.restauraBoton(event.target);
    },

    /*       
       asignaEventoTecla: function() {
           document.getElementById("on").addEventListener("click", function() { calculadora.borrarVisor(); });
       },*/

    ingresaNumero: function(elemento) {
        presionaBoton(tecla);
        /*mostrarVisor(tecla);
        restauraBoton(tecla);
        */
    },

    presionaBoton: function(elemento) {
        /*var x = document.querySelector(selector);*/
        var x = elemento.id;
        if (x == "1" || x == "2" || x == "3" || x == "0" || x == "igual" || x == "punto") {
            elemento.style.width = "28%";
            elemento.style.height = "62px";
        } else if (x == "mas") {
            elemento.style.width = "88%";
            elemento.style.height = "98%";
        } else {
            elemento.style.width = "21%";
            elemento.style.height = "62px";
        }
    },

    restauraBoton: function(elemento) {
        var x = elemento.id;
        if (x == "1" || x == "2" || x == "3" || x == "0" || x == "igual" || x == "punto") {
            elemento.style.width = "29%";
            elemento.style.height = "62.91px";
        } else if (x == "mas") {
            elemento.style.width = "90%";
            elemento.style.height = "100%";
        } else {
            elemento.style.width = "22%";
            elemento.style.height = "62.91px";
        }
    },

    borrarVisor: function() {
        calculadora.presionaBoton("#on");
        this.valorVisor = "0";
        this.operacion = "";
        this.numero1 = 0;
        this.numero2 = 0;
        this.resultado = 0;
        this.Operacion = "";
        this.auxTeclaIgual = false;
        this.ultimoValor = 0;
        this.actualizaVisor();
        this.valorVisor = "100";
        this.actualizaVisor();
        calculadora.restauraBoton("#on");
    },

    actualizaVisor: function() {
        this.visor.innerHTML = this.valorVisor;
        console.log(this.valorVisor);

    },

    /*
        
            sumar: function(){},
            restar: function(){},
            multiplicar: function(){},
            dividir: function(){}
      */

    inicio: (function() {
        this.asignarEventosTeclas(".tecla");
    })

};

calculadora.inicio();