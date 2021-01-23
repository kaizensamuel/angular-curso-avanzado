import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// RUTAS
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './login/registro.component';

// Modulos
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule // Importamos nuestro modulo seccionado
                // para que este app.module no crezca y tenerlo ordenado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
