import { Routes } from '@angular/router';

export default[
    {
        path:'distancia',
        loadComponent:()=>import('./distancia/distancia.component')
    },
    {
        path:'multiplicacion',
        loadComponent:()=>import('./multiplicacion/multiplicacion.component')
    },
    {
        path:'zodiaco',
        loadComponent:()=>import('./zodiaco/zodiaco.component')
    },
]