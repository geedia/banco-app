import { Component, OnInit } from '@angular/core';
import { Asesor } from '../asesor';
import { AsesorService } from '../asesor.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-form-asesor',
  templateUrl: './form-asesor.component.html'
})
export class FormAsesorComponent implements OnInit {
  public asesor: Asesor = new Asesor();
  public tituloCrear: any = 'CREAR ASESOR';
  public tituloEditar: any = 'EDITAR ASESOR';
  constructor(private asesorService: AsesorService, private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarAsesor();
  }

  create(): void {
    this.asesorService.create(this.asesor).subscribe(
      response => {this.router.navigate(['/asesores']);
      swal('Nuevo Asesor', `Asesor ${this.asesor.nombre} creado con éxito!`, 'success');
    }
    );
    console.log('guardado');
  }



  cargarAsesor(): void {
    this.activateRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.asesorService.getAsesor(id).subscribe( (asesor) => this.asesor = asesor);
      }

    });

  }

  update(): void {
    this.asesorService.updateAsesor(this.asesor).subscribe(
      response => {this.router.navigate(['/asesores']);
      swal('Asesor Editado', `Asesor ${this.asesor.nombre} actualizado con éxito!`, 'success');
    }
    );
    console.log('Editado');
  }
}
