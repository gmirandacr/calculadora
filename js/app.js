var calculadora = {
    resultado: 0,
    visor: document.getElementById("display"),
    valorVisor: "0",
    numero1: 0,
    numero2: 0,
    igual: false,
    segundoValor: false,
    ejecuto: false,
    ultimoValor: 0,


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

    asignaFuncionTeclas: function() {
        document.getElementById("on").addEventListener("click", function() { calculadora.borrarVisor(); });
        document.getElementById("1").addEventListener("click", function() { calculadora.ingresaNumero("1"); });
        document.getElementById("2").addEventListener("click", function() { calculadora.ingresaNumero("2"); });
        document.getElementById("3").addEventListener("click", function() { calculadora.ingresaNumero("3"); });
        document.getElementById("4").addEventListener("click", function() { calculadora.ingresaNumero("4"); });
        document.getElementById("5").addEventListener("click", function() { calculadora.ingresaNumero("5"); });
        document.getElementById("6").addEventListener("click", function() { calculadora.ingresaNumero("6"); });
        document.getElementById("7").addEventListener("click", function() { calculadora.ingresaNumero("7"); });
        document.getElementById("8").addEventListener("click", function() { calculadora.ingresaNumero("8"); });
        document.getElementById("9").addEventListener("click", function() { calculadora.ingresaNumero("9"); });
        document.getElementById("0").addEventListener("click", function() { calculadora.ingresaNumero("0"); });
        document.getElementById("mas").addEventListener("click", function() { calculadora.sumar(); });
        document.getElementById("menos").addEventListener("click", function() { calculadora.restar(); });
        document.getElementById("igual").addEventListener("click", function() { calculadora.muestraResultado(); });
    },

    ingresaNumero: function(numero) {
        console.log("valor visor1: " + this.valorVisor);
        if (this.valorVisor.length < 8) {

            if (this.valorVisor == "0" || this.valorVisor == "") {
                this.valorVisor = numero;
            } else {
                this.valorVisor = this.valorVisor.concat(numero);
            }
            this.ejecuto = false;
        }
        calculadora.actualizaVisor(this.valorVisor);
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
        this.valorVisor = "0";
        this.operacion = "";
        this.numero1 = 0;
        this.numero2 = 0;
        this.resultado = 0;
        this.Operacion = "";
        this.igual = false;
        this.segundoValor = false;
        this.ultimoValor = 0;
        this.actualizaVisor(this.valorVisor);
    },

    actualizaVisor: function(valor) {
        this.visor.innerHTML = valor;
    },

    sumar: function() {
        var numero = Number(this.valorVisor);
        this.operador = "sumar";
        this.ultimoValor = this.ultimoValor + numero;
        calculadora.actualizaVisor("");
        this.valorVisor = "";
    },
    restar: function() {
        var numero = Number(this.valorVisor);
        this.operador = "restar";
        this.ultimoValor = this.ultimoValor - numero;
        calculadora.actualizaVisor("");
        this.valorVisor = "";
    },
    multiplicar: function() {},
    dividir: function() {},

    ejecutaOperacion: function(operador, numero) {
        console.log(this.operador);
        switch (operador) {
            case "sumar":
                this.resultado = this.resultado + Number(this.ultimoValor) + Number(numero);
                break;
            case "restar":
                this.resultado = this.resultado - Number(this.ultimoValor) - Number(numero);
                break;
        }
        console.log("resultado:" + this.resultado);
        return this.resultado;
    },

    muestraResultado: function() {
        console.log("resultado visor muestra resultado ultimo valor:" + this.ultimoValor);
        if (this.ejecuto) {
            console.log("resultado en pantalla: " + this.resultado);
            this.ultimoValor = Number(this.visor.innerHTML);
            this.resultado = 0;
            /*this.ejecuto = false;*/
        } else {
            this.ejecuto = true;
        }
        console.log(this.operador);
        /* this.ultimoValor = Number(this.valorVisor);*/
        calculadora.actualizaVisor(calculadora.ejecutaOperacion(this.operador, Number(this.valorVisor)));
        this.resultado = 0;
    },

    inicio: (function() {
        this.asignarEventosTeclas(".tecla");
        this.asignaFuncionTeclas();
    })

};

calculadora.inicio();