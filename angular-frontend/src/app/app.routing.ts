import { WebsiteRoutes } from './auth/layout/website.routes';
import { HomeWebsiteRoutes } from './components/home-website.routes';
import { Routes } from '@angular/router';


export const routes: Routes = [...WebsiteRoutes,...HomeWebsiteRoutes,];
