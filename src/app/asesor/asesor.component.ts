import { Component, OnInit } from '@angular/core';
import { AsesorService } from './asesor.service';
import { Asesor } from './asesor';
import swal from 'sweetalert2';

@Component({
  selector: 'app-asesor',
  templateUrl: './asesor.component.html'
})
export class AsesorComponent implements OnInit {
  private asesores: Asesor[];
  constructor(private asesorService: AsesorService) { }

  ngOnInit() {
    this.asesorService.getAsesores().subscribe(
      asesores => this.asesores = asesores
    );
  }

  delete(asesor: Asesor): void {
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    } );
    swalWithBootstrapButtons({
      title: 'Esta Seguro?',
      text: `¿Seguro que desea eliminar al Asesor ${asesor.nombre}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.asesorService.deleteAsesor(asesor.id).subscribe(
          response => {
            this.asesores = this.asesores.filter(ase => ase !== asesor );
          swalWithBootstrapButtons(
            'Eliminado!',
            'El Asesor ha sido eliminado con éxito.',
            'success'
          );
          }
        );
    }
  });
     console.log('eliminado');
  }
}
