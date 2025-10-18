import { Component, EventEmitter, Input, Output } from '@angular/core';
//importar aqui
@Component({
  selector: 'app-temh',
  imports: [],
  templateUrl: './temh.component.html',
  styleUrl: './temh.component.css'
})
export class TemhComponent {
  @Input() mensaje!:string;
  //capacidad de enviar parámetros, decorador, en este caso, input
  //parametro a través de evento
  @Output() mensaje2=new EventEmitter<string>()

  enviarMensaje():void{
    this.mensaje2.emit("Mensaje desde el componente hijo TEMH")
  }
}
