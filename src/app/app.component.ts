import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite'
import { DistanciaComponent } from './formularios/distancia/distancia.component';
import { MultiplicacionComponent } from './formularios/multiplicacion/multiplicacion.component';
import { ZodiacoComponent } from './formularios/zodiaco/zodiaco.component';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  /* imports: [RouterOutlet, DistanciaComponent, MultiplicacionComponent, ZodiacoComponent, NavbarComponent], */
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo02';
  ngOnInit():void{
    initFlowbite();

  }
}
