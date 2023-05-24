import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  id: string = "";
  nombre: string = "";
  precio: number = 0;
  urlImagen: string = "";
  datosIngresados: any;

  guardarDatos(): void {
    this.datosIngresados = {
      id: this.id,
      nombre: this.nombre,
      precio: this.precio,
      urlImagen: this.urlImagen
    };
  }
}
