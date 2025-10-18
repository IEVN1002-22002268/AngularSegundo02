import { Routes } from '@angular/router';
/* Rutas por carpeta, la carpeta principal es auth, modelo tipo vista-controlador */
/* Las rutas son Referenciar a las diferentes pág del proyecto */
/* que rutas le van a pertener a este conjunto de rutas */
export default[
    {
        //como se llama mi ruta
        path:'sign-in',
        loadComponent:()=>import('./features/sign-in/sign-in.component').then(c=>c.SignInComponent)
        //path:'sign-up',
    },
    {
        path:'sign-up',
        loadComponent:()=>import('./features/sign-up/sign-up.component').then(c=>c.SignUpComponent)
    },
]