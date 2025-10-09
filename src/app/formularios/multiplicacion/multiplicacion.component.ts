import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-multiplicacion',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './multiplicacion.component.html',
  styleUrl: './multiplicacion.component.css'
})
export class MultiplicacionComponent {
  formulario!:FormGroup
  resultado!:number

  constructor(){

  }
  ngOnInit():void{/*los componentes tienen un ciclo de vida, creado, usado y liberado
    mientras se instancia el componente, se van yendo a llamar. Sin invocarlo, solito lo
    va a invocar cuando se pase la definición del componente. Sirve para inicializar las
    deficiones de los campos, conexiones a bases de datos o petición a una API, etc.*/
    this.formulario=new FormGroup({ /* Va a tener cierto tamaño */
      /* definir dos campos, ese numero 1 y 2 hay que definirlos arriba */
      /* solo lo utilizamos para mandarlo a llamar */
      numero1:new FormControl(''),
      numero2:new FormControl(''),
    })
  }

  multiplicarNumeros():void{
    let n1=this.formulario.value.numero1 //indicar el nombre, el value y nombre de la propiedad
    let n2=this.formulario.value.numero2
    this.resultado = n1*n2
  }
}
