// IMPORTACIONES DE LAS RUTAS
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component'
import { ProyectosComponent } from './components/proyectos/proyectos.component'
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component'
import { SomosComponent } from './components/somos/somos.component'

// RUTAS
const APP_ROUTE: Routes = [
    {path:'inicio', component:InicioComponent},
    {path:'', redirectTo:'inicio', pathMatch:'full'},
    {path:'about', component:AboutComponent},
    {path:'footer', component:FooterComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'proyectos', component:ProyectosComponent},
    {path:'somos', component:SomosComponent},
    {path:'**', component:PagenotfoundComponent}

]
export const app_routing = RouterModule.forRoot(APP_ROUTE);