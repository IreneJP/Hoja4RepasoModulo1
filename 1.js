"use strict";
/*1. Crear la clase Punto con los siguientes atributos privados:
• x: number
• y: number */
exports.__esModule = true;
exports.Triangulo = exports.Punto = void 0;
var Punto = /** @class */ (function () {
    //2. Crear un constructor que reciba como parámetros las coordenadas, x e y
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    //3. Crear un método denominado toString() que convierta a texto las coordenadas del punto, debe devolver: “(x,y) “
    //¿PUBLICO O PRIVADO?
    Punto.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    //4. Crear los métodos setter y getters de los atributos
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (x) {
        return this.x = x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (y) {
        return this.y = y;
    };
    //6. Crear un método denominado distanciaAlOrigen():number que devuelva la distancia del punto al origen de coordenadas (0,0).
    Punto.prototype.distanciaAlOrigen = function () {
        var x1 = 0, x2 = this.x, y1 = 0, y2 = this.y;
        var puntosXY;
        var distancia_0_1;
        puntosXY = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
        distancia_0_1 = Math.sqrt(puntosXY);
        return distancia_0_1;
    };
    //7. Crear un método denominado calcularDistancia(otroPunto:Punto):number, que devuelva la distancia entre el punto representado por la instancia actual del objeto y otra instancia de Punto que se recibe como parámetro. 
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var x2 = otroPunto.getX();
        var y2 = otroPunto.getY();
        var x1 = this.x, y1 = this.y;
        var puntosXY;
        var distancia_1_2;
        puntosXY = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
        distancia_1_2 = Math.sqrt(puntosXY);
        return distancia_1_2;
    };
    /*
        9. Programa un método denominado calcularCuadrante():number que devuelva el
    cuadrante en el que se encuentra el punto.
    El prototipo del método se muestra a continuación:
    • Devuelve 0 si está en el origen de coordenadas o sobre alguno de los
    ejes.
    • Devuelve 1 si está en el primer cuadrante (x e y positivos).
    • Devuelve 2 si está en el segundo cuadrante (x negativo e y positivo).
    • Devuelve 3 si está en el tercer cuadrante (x e y negativos).
    • Devuelve 4 si está en el cuarto cuadrante (x positivo e y negativo).*/
    Punto.prototype.calcularCuadrante = function () {
        var cuadrante = Number();
        if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        else if (this.x > 0 && this.y < 0) {
            cuadrante = 4;
        }
        if (this.x < 0 && this.y > 0) {
            cuadrante = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            cuadrante = 3;
        }
        return cuadrante;
    };
    //10.Programa un método denominado calcularMasCercano(puntos : Punto[]) : Punto, que reciba como parámetro un array de objetos de la clase Punto y devuelva una referencia al objeto de dicho array que esté más cercano al punto actual.
    Punto.prototype.calcularMasCercano = function (puntos) {
        var distancia = new Array;
        var resultado = "";
        var txt = new Array(puntos.length);
        for (var i = 0; i < puntos.length; i++) {
            txt[i] = puntos[i];
            distancia[i] = Math.sqrt(Math.pow((puntos[i].x - this.x), 2) + Math.pow((puntos[i].y - this.y), 2));
            if (distancia[1] > distancia[0]) {
                resultado = "El Pimer Punto del array " + puntos[0] + " está mas cerca del punto actual que el Segundo Punto" + puntos[1] + ", con una ditancia de: " + distancia[0] + " respecto a una de " + distancia[1];
            }
            else if (distancia[0] > distancia[1]) {
                resultado = "El Segundo Punto del array " + puntos[1] + " está mas cerca del punto actual que el Primer Punto" + puntos[0] + ", con una ditancia de: " + distancia[1] + " respecto a una de " + distancia[0];
            }
        }
        return resultado;
    };
    return Punto;
}());
exports.Punto = Punto;
/*Crea la clase Triangulo cuyo constructor reciba tres objetos de la clase Punto
que son sus vértices.
14. Tiene que tener como atributos privados los tres vertices*/
var Triangulo = /** @class */ (function () {
    function Triangulo(punto1, punto2, punto3) {
        this.punto1 = punto1;
        this.punto2 = punto2;
        this.punto3 = punto3;
    }
    Triangulo.prototype.getPunto1 = function () {
        return this.punto1;
    };
    Triangulo.prototype.getPunto2 = function () {
        return this.punto2;
    };
    Triangulo.prototype.getPunto3 = function () {
        return this.punto3;
    };
    //15. Programa el método calcularLongitudLados() : number[] que debe devolver un array de tres posiciones, cada una de las cuales debe ser la longitud de uno de los lados del triángulo. 
    Triangulo.prototype.calcularLongitudLados = function () {
        var posiciones = new Array(3);
        var dist1, dist2, dist3;
        dist1 = Math.sqrt(Math.pow((this.punto3.getX() - this.punto2.getX()), 2) + Math.pow((this.punto3.getY() - this.punto2.getY()), 2));
        dist2 = Math.sqrt(Math.pow((this.punto2.getX() - this.punto1.getX()), 2) + Math.pow((this.punto3.getY() - this.punto1.getY()), 2));
        dist3 = Math.sqrt(Math.pow((this.punto1.getX() - this.punto3.getX()), 2) + Math.pow((this.punto1.getY() - this.punto3.getY()), 2));
        return [dist1, dist2, dist3];
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
