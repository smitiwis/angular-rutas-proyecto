import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import {app_routing} from './app.routes';

//COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AboutComponent } from './components/about/about.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SomosComponent } from './components/somos/somos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ProyectosComponent,
    AboutComponent,
    ContactoComponent,
    PagenotfoundComponent,
    SomosComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
