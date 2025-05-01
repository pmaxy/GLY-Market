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
        // canActivate: [authGuard]
    },
    {
        path: 'chatroom',
        loadChildren: () => import('./modules/community/community.module').then(m => m.CommunityModule),
        
    },
    {
        path: 'drones',
        loadChildren: () => import('./modules/drones/drones.module').then(m => m.DronesModule),
        
    },
    {
        path: 'dronesuser',
        loadChildren: () => import('./modules/drone-user/drone-user.module').then(m => m.DroneUserModule),
        
    },
    {
        path: 'geoportal',
        loadChildren: () => import('./modules/geospatial/geospatial.module').then(m => m.GeospatialModule),
        
    }
    
];
