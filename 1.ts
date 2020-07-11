/*1. Crear la clase Punto con los siguientes atributos privados:
• x: number
• y: number */

export class Punto {
        private x: number;
        private y: number;

//2. Crear un constructor que reciba como parámetros las coordenadas, x e y
    constructor (x:number, y:number)
    {
        this.x = x;
        this.y = y;
    }
//3. Crear un método denominado toString() que convierta a texto las coordenadas del punto, debe devolver: “(x,y) “
    //¿PUBLICO O PRIVADO?
    toString():string {
        return "("+ this.x + "," + this.y + ")"
    }

//4. Crear los métodos setter y getters de los atributos
    public getX(){
        return this.x
    }
    public setX(x:number){
        return this.x = x
    }
    public getY(){
        return this.y
    }
    public setY(y:number){
        return this.y = y
    }
//6. Crear un método denominado distanciaAlOrigen():number que devuelva la distancia del punto al origen de coordenadas (0,0).
    public distanciaAlOrigen():number{
    let x1:number = 0, x2:number = this.x, y1:number = 0, y2:number = this.y
    let puntosXY:number
    let distancia_0_1:number

        puntosXY = Math.pow((x2-x1),2) + Math.pow((y2-y1),2)

        distancia_0_1 = Math.sqrt(puntosXY)

        return distancia_0_1
    }

//7. Crear un método denominado calcularDistancia(otroPunto:Punto):number, que devuelva la distancia entre el punto representado por la instancia actual del objeto y otra instancia de Punto que se recibe como parámetro. 

    calcularDistancia(otroPunto:Punto){
        let x2:number = otroPunto.getX()
        let y2:number = otroPunto.getY()
    
        let x1:number = this.x, y1:number = this.y
        let puntosXY:number
        let distancia_1_2:number

            puntosXY = Math.pow((x2-x1),2) + Math.pow((y2-y1),2)

            distancia_1_2 = Math.sqrt(puntosXY)
            return distancia_1_2


    }
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

calcularCuadrante():number{
    let cuadrante:number = Number()
    
            if (this.x >0 && this.y >0) {
                cuadrante = 1;
            } else if (this.x >0 && this.y<0) {
                cuadrante = 4 ;
            }
       
            if (this.x<0 && this.y >0) {
                cuadrante = 2;
            } else if (this.x<0 && this.y<0) {
                cuadrante = 3 ;
            }

    return cuadrante
    }



//10.Programa un método denominado calcularMasCercano(puntos : Punto[]) : Punto, que reciba como parámetro un array de objetos de la clase Punto y devuelva una referencia al objeto de dicho array que esté más cercano al punto actual.


    calcularMasCercano(puntos : Punto[]){
      
      let distancia = new Array
        let resultado:string = ""
        let txt:Punto[]= new Array(puntos.length)

        for (let i=0; i<puntos.length; i++){
            txt[i]= puntos[i]
            distancia[i]= Math.sqrt(Math.pow((puntos[i].x-this.x),2) + Math.pow((puntos[i].y-this.y),2))
            if (distancia[1]>distancia[0]){
                resultado = "El Pimer Punto del array " + puntos[0] + " está mas cerca del punto actual que el Segundo Punto" + puntos[1]+ ", con una ditancia de: " + distancia[0] + " respecto a una de " + distancia[1]
            }else if (distancia[0]>distancia[1]){
                resultado = "El Segundo Punto del array " + puntos[1] + " está mas cerca del punto actual que el Primer Punto" + puntos[0]+ ", con una ditancia de: " + distancia[1] + " respecto a una de " + distancia[0]

            }
        }
        return resultado
    }   
            
      /*FUNCIONA
        let referencia:string="",distancia0:number=Number(), distancia1:number = Number() 

        distancia0 = Math.sqrt(Math.pow((puntos[0].x-this.x),2) + Math.pow((puntos[0].y-this.y),2))
        distancia1 = Math.sqrt(Math.pow((puntos[1].x-this.x),2) + Math.pow((puntos[1].y-this.y),2))
        
        if (distancia0<distancia1){
            referencia = ("El primer Punto del Array está a una distandia más cercana del Punto Actual (" + distancia0 + ") que el segundo Punto (" + distancia1 + ")")
        }   else if(distancia0>distancia1){
            referencia = ("El segundo Punto del Array está a una distandia más cercana del Punto Actual (" + distancia1 + ")que el primer Punto (" + distancia0 + ")")
        }

        return referencia

        }*/
} 


