import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import simplebar from 'simplebar';







//import { FormProdcutService } from '../form-prodcut.service';
//import { ApiService } from '../form-prodcut.service';
//import {modelFormProductI} from '../models/model-form-product.interface'
//import { Observable } from 'rxjs';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css','./simplebar.component.css']
})

export class FormularioComponent {
  id: string = "";
  nombre: string = "";
  precio: number = 0;
  urlImagen: string = "";
  datosIngresados: any;
  errorMessage: string = '';
  successMessage: String = '';
  url = 'http://localhost:8000/api/Create_product'; // Dirección de la API
  mostrarFormulario = false;
  
  mostrarOcultarFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  constructor(private http: HttpClient) { }
  //OBS. el control del ingreso de datos, deberia hacerse desde el backend, ie verificar que el usuario no exista
  //deberia controlarse desde el backend
  guardarDatos(): void {
    this.datosIngresados = {
      id: this.id,
      nombre: this.nombre,
      precio: this.precio,
      urlImagen: this.urlImagen
    };
    const body = { id: this.id, nombre: this.nombre, precio: this.precio, url_de_imagen: this.urlImagen}; // Reemplaza esto con el cuerpo de tu solicitud POST
    // Realizar la llamada al backend y manejar la respuesta
    this.http.post(this.url, body).subscribe(
      (response) => {
        console.log('Solicitud POST exitosa', response);
        this.successMessage = 'Producto registrado con exito'
        // Realizar acciones adicionales con la respuesta de la API
        
        // Por ejemplo, mostrar un mensaje de éxito
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error en la solicitud POST', error);
        // Manejar el error de la solicitud

        // Verificar si el error es debido a que el ID ya existe
        if (error.status === 400 && error.error && error.error.detail === `Product ${this.id} already exists`) {
          this.errorMessage = 'El ID del producto ya existe, no se puede registrar en el sistema';
        } //else {
          //this.errorMessage = 'Error en la solicitud POST';
        //}
      }
    ); 
  }
  ngAfterViewInit() {
    const container = document.querySelector('.superpuesto-formulario');
    if (container) {
      new simplebar(container as HTMLElement);
    }
  }
  
    
}

