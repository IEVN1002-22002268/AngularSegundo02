import { Routes } from '@angular/router';

export default[
    {
        path:'distancia',
        loadComponent:()=>import('./distancia/distancia.component').then(c=>c.DistanciaComponent)
    },
    {
        path:'multiplicacion',
        loadComponent:()=>import('./multiplicacion/multiplicacion.component').then(c=>c.MultiplicacionComponent)
    },
    {
        path:'zodiaco',
        loadComponent:()=>import('./zodiaco/zodiaco.component').then(c=>c.ZodiacoComponent)
    },
]