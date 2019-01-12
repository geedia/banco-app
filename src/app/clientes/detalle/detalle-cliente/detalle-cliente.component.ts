import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../../cliente';
import { Consumo } from '../../consumo/consumo';
import { TarjetaCliente } from '../../tarjeta/tarjeta-cliente';
import { ClienteService } from '../../cliente.service';
import { ConsumoService } from '../../consumo/consumo.service';
import swal from 'sweetalert2';
import { TarjetaService } from '../../tarjeta/tarjeta.service';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html'
})
export class DetalleClienteComponent implements OnInit {
  private cliente: Cliente;
  private consumos: Consumo[];
  private tarjetasCliente: TarjetaCliente[];

  constructor(private clienteService: ClienteService, private consumoService: ConsumoService
     , private router: Router, private activateRoute: ActivatedRoute
     , private tarjetaService: TarjetaService) { }

  ngOnInit() {
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.activateRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente);
        this.consumoService.getConsumosCliente(id).subscribe( (consumos) => this.consumos = consumos);
      }

    });
  }

  deleteTarjeta(tarjeta: TarjetaCliente): void {
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    } );
    swalWithBootstrapButtons({
      title: 'Esta Seguro?',
      text: `¿Seguro que desea eliminar la tarjeta ${tarjeta.numero}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.tarjetaService.deleteTarjeta(tarjeta.id).subscribe(
          response => {
            this.cliente.tarjetas = this.cliente.tarjetas.filter(tar => tar !== tarjeta );
          swalWithBootstrapButtons(
            'Eliminado!',
            'El Cliente ha sido eliminado con éxito.',
            'success'
          );
          }
        );
    }
  });
     console.log('eliminado');
  }

  deleteConsumo(consumo: Consumo): void {
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    } );
    swalWithBootstrapButtons({
      title: 'Esta Seguro?',
      text: '¿Seguro que desea eliminar el historial de consumo?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.consumoService.delete(consumo.id).subscribe(
          response => {
            this.consumos = this.consumos.filter(cons => cons !== consumo );
          swalWithBootstrapButtons(
            'Eliminado!',
            'El Historial de Consumo ha sido eliminado con éxito.',
            'success'
          );
          }
        );
    }
  });
     console.log('eliminado');
  }


}
