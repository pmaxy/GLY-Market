import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren:() => import('./modules/Auth/auth.module').then(m => m.AuthModule)

    },
    {
        path: 'user',
        loadChildren: () => import('./modules/User/user.module').then(m => m.UserModule)
    }
];
