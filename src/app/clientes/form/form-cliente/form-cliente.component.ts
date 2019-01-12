import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente';
import { ClienteService } from '../../cliente.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html'
})
export class FormClienteComponent implements OnInit {
  private cliente: Cliente = new Cliente();
  private tituloCrear: any = 'CREAR CLIENTE';
  private tituloEditar: any = 'EDITAR CLIENTE';
  constructor(private clienteService: ClienteService, private router: Router,
    private activateRoute: ActivatedRoute) { }
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
      }

    });

  }

  update(): void {
    this.clienteService.updateCliente(this.cliente).subscribe(
      response => {this.router.navigate(['/clientes']);
      swal('Cliente Editado', `Cliente ${this.cliente.nombre} actualizado con éxito!`, 'success');
    }
    );
    console.log('Editado');
  }

}
