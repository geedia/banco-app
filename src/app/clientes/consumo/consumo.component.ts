import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { TarjetaCliente } from '../tarjeta/tarjeta-cliente';
import { ConsumoService } from './consumo.service';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html'
})
export class ConsumoComponent implements OnInit {

  private cliente: Cliente;
  private tarjeta: TarjetaCliente;
  private titulo: 'Historial de Consumo';
  constructor(private consumoService: ConsumoService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarTarjeta();
  }

  cargarTarjeta(): void {
    this.activateRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.consumoService.getTarjeta(id).subscribe( (tarjeta) => this.tarjeta = tarjeta);
      }

    });

  }

}
