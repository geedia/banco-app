import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { TarjetaCliente } from '../tarjeta-cliente';
import { TarjetaService } from '../tarjeta.service';
import { Cliente } from '../../cliente';

@Component({
  selector: 'app-form-tarjeta',
  templateUrl: './form-tarjeta.component.html'
})
export class FormTarjetaComponent implements OnInit {
  private tarjeta: TarjetaCliente = new TarjetaCliente();
  private cliente: Cliente = new Cliente();
  private tituloCrear: any = 'CREAR TARJETA';
  private tituloEditar: any = 'EDITAR TARJETA';
  constructor(private tarjetaService: TarjetaService, private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
    this.cargarTarjeta();
  }
  create(): void {
    this.tarjeta.cliente = this.cliente;
    this.tarjetaService.create(this.tarjeta).subscribe(
      response => {this.router.navigate(['/clientes']);
      swal('Nueva Tarjeta', 'Tarjeta Creada con éxito!', 'success');
    }
    );
    console.log('guardado');
  }

  cargarTarjeta(): void {
    this.activateRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.tarjetaService.getTarjeta(id).subscribe( (tarjeta) => this.tarjeta = tarjeta);
      }

    });

  }

  update(): void {
    this.tarjetaService.updateTarjeta(this.tarjeta).subscribe(
      response => {this.router.navigate(['/clientes']);
      swal('Tarjeta Editado', 'Tarjeta actualizada con éxito!', 'success');
    }
    );
    console.log('Editado');
  }

  cargarCliente(): void {
    this.activateRoute.params.subscribe(params => {
      const id = params['idCliente'];
      if (id) {
        this.cliente.id = id;
      }

    });
  }

}
