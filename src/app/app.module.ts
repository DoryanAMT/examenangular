import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { CubosMarcasComponent } from './components/cubos-marcas/cubos-marcas.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import ServiceCubos from './services/service.cubos';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CompraComponent } from './components/compra/compra.component';
import { PedidoComponent } from './components/pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CubosMarcasComponent,
    CuboComponent,
    LogoutComponent,
    RegisterComponent,
    PerfilComponent,
    CompraComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(),
    ServiceCubos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
