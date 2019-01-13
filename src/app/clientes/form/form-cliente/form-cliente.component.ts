import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente';
import { ClienteService } from '../../cliente.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { TarjetaCliente } from '../../tarjeta/tarjeta-cliente';
import { TarjetaService } from '../../tarjeta/tarjeta.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html'
})
export class FormClienteComponent implements OnInit {
  public cliente: Cliente;
  public tituloCrear: any = 'CREAR CLIENTE';
  public tituloEditar: any = 'EDITAR CLIENTE';
  public tarjetas: TarjetaCliente[];
  constructor(private clienteService: ClienteService, private router: Router,
    private activateRoute: ActivatedRoute, private tarjetaServicio: TarjetaService) { }
  ngOnInit() {
    this.cargarCliente();
  }

  create(): void {
    this.clienteService.create(this.cliente).subscribe(
      response => {this.router.navigate(['/clientes']);
      swal('Nuevo Cliente', `cliente ${this.cliente.nombre} creado con éxito!`, 'success');
    }
    );
    console.log('guardado');
  }



  cargarCliente(): void {
    this.activateRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente);
        this.tarjetaServicio.getTarjetasCliente(id).subscribe( (tarjetas) => this.tarjetas = tarjetas);
      } else {
        this.cliente = new Cliente();
      }

    });

  }

  update(): void {
    this.cliente.tarjetas = this.tarjetas;
    this.clienteService.updateCliente(this.cliente).subscribe(
      response => {this.router.navigate(['/clientes']);
      swal('Cliente Editado', `Cliente ${this.cliente.nombre} actualizado con éxito!`, 'success');
    }
    );
    console.log('Editado');
  }

}
