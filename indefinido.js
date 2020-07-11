var x1 = 4, y1 = 6;
function distancia12(x2, y2) {
    var puntosXY;
    var distancia_1_2;
    puntosXY = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
    distancia_1_2 = Math.sqrt(puntosXY);
    return distancia_1_2;
}
console.log(distancia12(4, 2));
var x2 = 2, y2 = 2;
var puntosXY;
var distancia_1_2;
puntosXY = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
distancia_1_2 = Math.sqrt(puntosXY);
console.log(distancia_1_2);
function cuadrante(x, y) {
    var cuadrante = Number();
    if (x > 0 && y > 0) {
        cuadrante = 1;
    }
    else if (x > 0 && y < 0) {
        cuadrante = 4;
    }
    if (x < 0 && y > 0) {
        cuadrante = 2;
    }
    else if (x < 0 && y < 0) {
        cuadrante = 3;
    }
    return cuadrante;
}
console.log(cuadrante(3, 4));
console.log(cuadrante(-3, -4));
console.log(cuadrante(-3, 4));
console.log(cuadrante(3, -4));
