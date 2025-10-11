import { Routes } from '@angular/router';

export default[
    {
        path:'agregar',
        loadComponent:()=>import('./agregar/agregar.component')
    },
    {
        path:'listaalumnos',
        loadComponent:()=>import('./alumnos/alumnos.component')
    },
    {
        path:'editar/:matricula',
        loadComponent:()=>import('./editar/editar.component')
    },
    {
        path:'eliminar/:matricula',
        loadComponent:()=>import('./eliminar/eliminar.component')
    },
]