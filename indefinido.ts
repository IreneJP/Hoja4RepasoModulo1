let x1:number = 4, y1:number = 6

        function distancia12 (x2:number,y2:number){
        
        let puntosXY:number
        let distancia_1_2:number
        

            puntosXY = Math.pow((x2-x1),2) + Math.pow((y2-y1),2)

            distancia_1_2 = Math.sqrt(puntosXY)
            return distancia_1_2
        
        }  
        console.log(distancia12(4,2))




        let x2:number=2, y2:number=2
        
        
        
        let puntosXY:number
        let distancia_1_2:number

            puntosXY = Math.pow((x2-x1),2) + Math.pow((y2-y1),2)

            distancia_1_2 = Math.sqrt(puntosXY);
            console.log(distancia_1_2)


    function cuadrante (x:number,y:number){
            let cuadrante:number = Number()
    
            if (x >0 && y >0) {
                cuadrante = 1;
            } else if (x >0 && y<0) {
                cuadrante = 4 ;
            }
          
       
            if (x<0 && y >0) {
                cuadrante = 2;
            } else if (x<0 && y<0) {
                cuadrante = 3 ;
            }

    return cuadrante
        
    }

    console.log(cuadrante(3,4))
    console.log(cuadrante(-3,-4))
    console.log(cuadrante(-3,4))
    console.log(cuadrante(3,-4))
