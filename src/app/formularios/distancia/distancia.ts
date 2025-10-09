export class DistanciaClase{
    numx1:number=0
    numx2:number=0
    numy1:number=0
    numy2:number=0
    resultadoFinal:number=0


    calcularDistancia():void{
        let operacionX = (this.numx2 - (this.numx1))
        let operacionY = (this.numy2 - (this.numy1))

        let resXcuadrado = Math.pow(operacionX, 2)
        let resYcuadrado = Math.pow(operacionY, 2)

        let resSumaXY = resXcuadrado + resYcuadrado

        this.resultadoFinal = Math.sqrt(resSumaXY)
    }
}