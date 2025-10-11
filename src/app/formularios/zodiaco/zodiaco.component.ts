import { Component } from '@angular/core';
import { calcularZodiacoChino } from './zodiaco';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
  formulario!: FormGroup;
  nombreCompleto!:string
  signoZfinal!:string
  imagenSignoFinal!:string
  edadFinal!:number
  sexo!:string
  objCalcularZodiaco= new calcularZodiacoChino()

  ngOnInit():void{
    this.formulario=new FormGroup({  
      nombre:new FormControl(''),
      apaterno:new FormControl(''),
      amaterno:new FormControl(''),
      diaNacimiento:new FormControl(''),
      mesNacimiento:new FormControl(''),
      anioNacimiento:new FormControl(''),
      genero:new FormControl(''),
    }) 
  }
  cargarInformacion():void{
    /* Pasar informacion del formulario a la clase */
    this.objCalcularZodiaco.nombreUsuario = this.formulario.value.nombre
    this.objCalcularZodiaco.apellidoPaterno = this.formulario.value.apaterno
    this.objCalcularZodiaco.apellidoMaterno = this.formulario.value.amaterno
    this.objCalcularZodiaco.diaNacimiento = this.formulario.value.diaNacimiento
    this.objCalcularZodiaco.mesNacimiento = this.formulario.value.mesNacimiento
    this.objCalcularZodiaco.anioNacimiento = this.formulario.value.anioNacimiento
    
    /* Ejecutar funciones */
    this.objCalcularZodiaco.calcularNombreCompleto()
    this.objCalcularZodiaco.calcularEdad()
    this.objCalcularZodiaco.calcularSignoChino()
    
    /* Asignar valores a las variables con la informacion final */
    this.nombreCompleto = this.objCalcularZodiaco.nombreCompleto
    this.edadFinal = this.objCalcularZodiaco.edad
    this.signoZfinal = this.objCalcularZodiaco.signoFinal
    this.imagenSignoFinal = this.objCalcularZodiaco.imagenSignoFinal
  }
}
