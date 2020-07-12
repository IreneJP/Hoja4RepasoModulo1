"use strict";
exports.__esModule = true;
//5. Crear un fichero main que cree un objeto de tipo Punto se le asigne dos coordenadas y luego las imprima en la consola
var _1_1 = require("./1");
var miPunto1 = new _1_1.Punto(4, 6);
console.log(miPunto1);
//8. Modificar el fichero main para comprobar los nuevos métodos.
console.log("Coordenadas del punto en string");
console.log(miPunto1.toString());
console.log("Coordenada x:");
console.log(miPunto1.getX());
console.log("Coordenada y:");
console.log(miPunto1.getY());
console.log("\n");
console.log("Distancia del Punto " + miPunto1.toString() + " al origen de coordenadas (0,0)");
console.log(miPunto1.distanciaAlOrigen());
var miPunto2 = new _1_1.Punto(2, 2);
console.log("Distancia del Punto " + miPunto1.toString() + " y el Punto " + +miPunto2.toString() + " que se recibe como parámetro ");
console.log(miPunto1.calcularDistancia(miPunto2));
console.log("\n");
console.log("El cuadrante del Punto " + miPunto1.toString() + " es: ");
console.log(miPunto1.calcularCuadrante());
console.log("El cuadrante del Punto " + miPunto2.toString() + " es: ");
console.log(miPunto2.calcularCuadrante());
console.log("\n");
var miPunto3 = new _1_1.Punto(-4, -1);
var miPunto4 = new _1_1.Punto(-3, 7);
var miPunto5 = new _1_1.Punto(5, -1);
var miPunto6 = new _1_1.Punto(1, -9);
var array1 = [miPunto1, miPunto2];
var array2 = [miPunto2, miPunto3];
var array3 = [miPunto3, miPunto4];
var array4 = [miPunto4, miPunto5];
var array5 = [miPunto5, miPunto6];
console.log("Siendo el Punto Actual  " + miPunto2 + ":");
console.log(miPunto2.calcularMasCercano(array1));
console.log("\n");
console.log("Siendo el Punto Actual  " + miPunto3 + ":");
console.log(miPunto3.calcularMasCercano(array2));
console.log("\n");
console.log("Siendo el Punto Actual  " + miPunto4 + ":");
console.log(miPunto4.calcularMasCercano(array5));
console.log("\n");
console.log("Siendo el Punto Actual  " + miPunto6 + ":");
console.log(miPunto6.calcularMasCercano(array4));
//Modificar el fichero main para crear un objeto de la clase triangulo e invocar al método calcularLongitudLados
var _1_2 = require("./1");
var miTriangulo1 = new _1_2.Triangulo(miPunto2, miPunto5, miPunto6);
var miTriangulo2 = new _1_2.Triangulo(miPunto4, miPunto1, miPunto3);
console.log("\n");
console.log("Los Puntos del Triánglo 1 son");
console.log(miTriangulo1);
console.log("Los Puntos del Triánglo 2 son");
console.log(miTriangulo2);
/*Sacar puntos x,y del primer punto del array
console.log(miTriangulo1.getPunto1())
sacar x del primer punto del arrray
console.log(miTriangulo1.getPunto1().getX())
*/
console.log("\n");
console.log("Longitudes de cada uno de los lados del triángulo 1");
console.log(miTriangulo1.calcularLongitudLados());
console.log("Longitudes de cada uno de los lados del triángulo 2");
console.log(miTriangulo2.calcularLongitudLados());
