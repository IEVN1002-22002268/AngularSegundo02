import { Component } from '@angular/core';
import { DistanciaClase } from './distancia'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!:FormGroup
  resultadoFinal!:number

  objDistancia = new DistanciaClase()
  ngOnInit():void{
    this.formulario=new FormGroup({  
      numerox1:new FormControl(''),
      numerox2:new FormControl(''),
      numeroy1:new FormControl(''),
      numeroy2:new FormControl(''),
    }) 
  }
  calcularDistancia():void{
    this.objDistancia.numx1 = this.formulario.value.numerox1
    this.objDistancia.numx2 = this.formulario.value.numerox2
    this.objDistancia.numy1 = this.formulario.value.numeroy1
    this.objDistancia.numy2 = this.formulario.value.numeroy2

    this.objDistancia.calcularDistancia();

    // guardar el resultado del objeto en la variable local
    this.resultadoFinal = this.objDistancia.resultadoFinal;
  }
}
