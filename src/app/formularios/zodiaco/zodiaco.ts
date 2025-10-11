export class calcularZodiacoChino{
    nombreUsuario:string=""
    apellidoPaterno:string=""
    apellidoMaterno:string=""
    nombreCompleto:string=""
    diaNacimiento:number=0
    mesNacimiento:number=0
    anioNacimiento:number=0
    genero:string=""
    indiceSigno:number=0
    //fechaNacimiento:string=""
    signoFinal:string=""
    imagenSignoFinal:string=""
    edad:number=0

    signosChinos:string[]=["Rata","Buey","Tigre","Conejo","Dragon","Serpiente","Caballo","Cabra","Mono","Gallo","Perro","Cerdo"]
    imagenesSignosChinos:string[]=[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdpD17ek28ExFCoc5Xw9lR_amIsbWIuPs4g&s",
        "https://peopleenespanol.com/thmb/ia0u33jxk7_bfFTLf1viDW9j5LA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horoscopo-chino-buey-de-metal-2021-e93c7ebe89ab4c0daa8704d6e4a827dd.png",
        "https://www.cronista.com/files/image/717/717291/6568adb447231.jpg",
        "https://elcomercio.pe/resizer/5IAw0t4NmXNqRxOzo4p1gK0H5DQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/SFCOR7PPI5HOFFNGQNJQTCIQVE.jpg",
        "https://peopleenespanol.com/thmb/blSccuj1LqAcyBOI-SNWH1k_9LE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165942305-2000-8fe379790e0e4ccba8ea80e33697647e.jpg",
        "https://media.istockphoto.com/id/165930223/es/vector/a%C3%B1o-de-la-serpiente.jpg?s=612x612&w=0&k=20&c=KPbx-vCkDwNB1JCMkGDze2VG_TGLXit4M_u8JAQqOok=",
        "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg",
        "https://peopleenespanol.com/thmb/Fwy99mIonHJYbhmA9AOTeWCpkdU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967741-2000-12afb4d370f14afe856f05ba36fe1693.jpg",
        "https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Mono.jpg",
        "https://peopleenespanol.com/thmb/Th2wLXhS9Tzh3VR7DtVB9CwgUFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165926089-2000-25a52aba2d0942679de98ba836f1ab9f.jpg",
        "https://studycli.org/wp-content/uploads/2021/06/chinese-new-year-year-of-the-dog-paper-cutting.jpeg",
        "https://peopleenespanol.com/thmb/3_4ezJWMT8DtQSEuV5vMg3X8DUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165969332-2000-eea5e27d3f4145c9b01121f4c61ccaef.jpg",]

    calcularNombreCompleto():void{
        this.nombreCompleto = this.nombreUsuario + " " + this.apellidoPaterno + " " + this.apellidoMaterno
    }
    calcularEdad():void{
       let fechaNacimiento = new Date(this.anioNacimiento, this.mesNacimiento - 1, this.diaNacimiento);
       let fechaActual = new Date()
       let edadAnios = 2025 - this.anioNacimiento
       let meses_de_diferencia = 10 - this.mesNacimiento
       if(meses_de_diferencia < 0 || (meses_de_diferencia == 0 && fechaActual.getDate() < fechaNacimiento.getDate())){
        this.edad = edadAnios - 1
       }
       else{
        this.edad= edadAnios
       }
    }
    calcularSignoChino():void{
        this.indiceSigno = (this.anioNacimiento - 1936) % 12
        this.signoFinal = this.signosChinos[this.indiceSigno]
        this.imagenSignoFinal = this.imagenesSignosChinos[this.indiceSigno]
    }
}