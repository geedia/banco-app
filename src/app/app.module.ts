import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConsumoComponent } from './clientes/consumo/consumo.component';
import { FormatoCCPipe } from './clientes/formato-cc.pipe';
import { AsesorComponent } from './asesor/asesor.component';
import { FormAsesorComponent } from './asesor/form-asesor/form-asesor.component';
import { FormsModule } from '@angular/forms';
import { FormClienteComponent } from './clientes/form/form-cliente/form-cliente.component';
import { DetalleClienteComponent } from './clientes/detalle/detalle-cliente/detalle-cliente.component';
import { FormTarjetaComponent } from './clientes/tarjeta/form-tarjeta/form-tarjeta.component';
import { FormConsumoComponent } from './clientes/consumo/form-consumo/form-consumo.component';

const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full' },
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/tarjeta/:idCliente', component: FormTarjetaComponent},
  {path: 'asesores', component: AsesorComponent},
  {path: 'asesores/form', component: FormAsesorComponent},
  {path: 'asesores/form/:id', component: FormAsesorComponent},
  {path: 'clientes/form/:id', component: FormClienteComponent},
  {path: 'clientes/form', component: FormClienteComponent},
  {path: 'clientes/detalle/:id', component: DetalleClienteComponent},
  {path: 'tarjeta/consumo/:id', component: FormConsumoComponent},
  {path: 'consumo/:idConsumo', component: FormConsumoComponent},
  {path: 'tarjeta/:id', component: FormTarjetaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    ConsumoComponent,
    FormatoCCPipe,
    AsesorComponent,
    FormAsesorComponent,
    FormClienteComponent,
    DetalleClienteComponent,
    FormTarjetaComponent,
    FormConsumoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
