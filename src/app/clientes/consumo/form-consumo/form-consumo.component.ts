import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { Consumo } from '../consumo';
import { ConsumoService } from '../consumo.service';
import { TarjetaCliente } from '../../tarjeta/tarjeta-cliente';

@Component({
  selector: 'app-form-consumo',
  templateUrl: './form-consumo.component.html'
})
export class FormConsumoComponent implements OnInit {

  public consumo: Consumo = new Consumo();
  public tituloCrear: any = 'CREAR CONSUMO';
  public tituloEditar: any = 'EDITAR CONSUMO';
  public tarjeta: TarjetaCliente = new TarjetaCliente();
  public idTarjeta: number;

  constructor(private consumoService: ConsumoService, private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
     this.cargarTarjeta();
     this.cargarConsumo();
  }

  create(): void {
    this.consumo.tarjeta = this.tarjeta;
    this.consumoService.create(this.consumo).subscribe(
      response => {
      this.router.navigate(['/clientes']);
      swal('Nuevo Consumo', 'Consumo creado con éxito!', 'success');
    }
    );
    console.log('guardado');
  }

    cargarTarjeta(): void {
      this.activateRoute.params.subscribe(params => {
        const id = params['id'];
        if (id) {
          this.tarjeta.id = id;
        }

      });

  }

  update(): void {
    this.consumoService.updateConsumo(this.consumo).subscribe(
      response => {
        this.router.navigate(['/clientes']);
      swal('Consumo Editado', 'Consumo  actualizado con éxito!', 'success');
    }
    );
    console.log('Editado');
  }

  cargarConsumo(): void {
    this.activateRoute.params.subscribe(params => {
      const id = params['idConsumo'];
      if (id) {
        this.consumoService.getConsumo(id).subscribe( (cons) => this.consumo = cons);
      }

    });
  }

}
