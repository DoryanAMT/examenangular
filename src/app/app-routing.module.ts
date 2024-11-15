import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CubosMarcasComponent } from './components/cubos-marcas/cubos-marcas.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CompraComponent } from './components/compra/compra.component';
import { PedidoComponent } from './components/pedido/pedido.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"login",component: LoginComponent},
  {path:"cubos/:marca",component: CubosMarcasComponent},
  {path:"cubo/:id",component: CuboComponent},
  {path:"logout",component: LogoutComponent},
  {path:"register",component: RegisterComponent},
  {path:"perfil",component: PerfilComponent},
  {path:"compras",component: CompraComponent},
  {path:"pedido",component: PedidoComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
