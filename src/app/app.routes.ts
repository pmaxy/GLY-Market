import { Routes } from '@angular/router';
import { authGuard } from './services/guard/auth.guard';


export const routes: Routes = [
    {
        path:'',
        loadChildren:() => import('./modules/Auth/auth.module').then(m => m.AuthModule),
        
        

    },
    {
        path: 'userAdmin',
        loadChildren: () => import('./modules/User/user.module').then(m => m.UserModule),
        canActivate: [authGuard]
    }
];
