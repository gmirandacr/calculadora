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
    /*
        asignarEventosFormatoBotones: function(selector){
            var x = document.querySelectorAll(selector);
            for (var i = 0; i<x.length;i++) {
                x[i].onmouseover = this.eventoAchicaBoton;
                x[i].onmouseleave = this.eventoVuelveBoton;
            };
        },
        */
    asignaEventoTecla: function() {
        document.getElementById("on").addEventListener("click", function() { calculadora.borrarVisor(); });
    },

    ingresaNumero: function(tecla) {
        presionaBoton(tecla);
        /*mostrarVisor(tecla);
        restauraBoton(tecla);
        */
    },

    presionaBoton: function(selector) {
        var x = document.querySelector(selector);
        x.style.width = "10%";
        x.style.height = "60px";
    },

    restauraBoton: function(selector) {
        var x = document.querySelector(selector);
        console.log(x);
        console.log(x.style.width);
        x.style.width = "22%";
        console.log(x.style.width);
        x.style.height = "62,91px";
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
        this.asignaEventoTecla();
    })

};

calculadora.inicio();