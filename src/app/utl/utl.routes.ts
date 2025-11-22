import { Routes } from '@angular/router';

export default[
    {
        path:'agregar',
        loadComponent:()=>import('./agregar/agregar.component').then(m=>m.AgregarComponent)
    },
    {
        path:'listaalumnos',
        loadComponent:()=>import('./alumnos/alumnos.component').then(m=>m.AlumnosComponent)
    },
    {
        path:'editar/:matricula',
        loadComponent:()=>import('./editar/editar.component').then(m=>m.EditarComponent)
    },
    {
        path:'eliminar/:matricula',
        loadComponent:()=>import('./eliminar/eliminar.component').then(m=>m.EliminarComponent)
    },
] as Routes