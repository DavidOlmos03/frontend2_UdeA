import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { FormProdcutService } from '../form-prodcut.service';
//import { ApiService } from '../form-prodcut.service';
import {modelFormProductI} from '../models/model-form-product.interface'
import { Observable } from 'rxjs';

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
  errorMessage: string = '';
  url = 'http://localhost:8000/api/Create_product'; // Reemplaza esta URL con la dirección de tu API
  //datos: any;

  constructor(private http: HttpClient) { }
  /*
  checkIdExists(id: number): Observable<boolean> {
    return this.http.get<boolean>(`http://localhost:8000/api/check_id/${id}`);
  }*/
  
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
        // Realizar acciones adicionales con la respuesta de la API
        
        // Por ejemplo, mostrar un mensaje de éxito
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error en la solicitud POST', error);
        // Manejar el error de la solicitud

        // Verificar si el error es debido a que el ID ya existe
        if (error.status === 400 && error.error && error.error.detail === 'El ID del producto ya existe') {
          this.errorMessage = 'El ID del producto ya existe, no se puede registrar en el sistema';
        } else {
          this.errorMessage = 'Error en la solicitud POST';
        }
      }
    );
    /*
    this.http.post(this.url, body).subscribe(
      (response) => {
        console.log('Solicitud POST exitosa', response);
        // Realiza las acciones necesarias con la respuesta de la API
      },
      (error) => {
        console.error('Error en la solicitud POST', error);
        // Maneja el error de la solicitud
      }
    );*/
  /*
    this.checkIdExists(this.datosIngresados.id).subscribe(
      (idExists: boolean) => {
        if (idExists) {
          const body = { id: this.datosIngresados.id, nombre: this.datosIngresados.nombre, precio: this.datosIngresados.precio, url_de_imagen: this.datosIngresados.urlImagen};
          this.http.post(this.url, body).subscribe(
            (response) => {
              console.log('Solicitud POST exitosa', response);
              // Realiza las acciones necesarias con la respuesta de la API
            },
            (error) => {
              console.error('Error en la solicitud POST', error);
              // Maneja el error de la solicitud
            }
          );
        } else {
          console.error('Error en la solicitud POST, el id del producto ya existe');
        }
      },
      (error) => {
        console.error('Error al verificar la existencia del id', error);
        // Maneja el error de la verificación del id
      }
    );*/
  }

  /*
  guardarDatos(): void {
    this.datosIngresados = {
      id: this.id,
      nombre: this.nombre,
      precio: this.precio,
      urlImagen: this.urlImagen
    };

    if (this.checkIdExists(this.datosIngresados.id)==true){
      const body = { id: this.id, nombre: this.nombre, precio: this.precio, url_de_imagen: this.urlImagen}; // Reemplaza esto con el cuerpo de tu solicitud POST
      this.http.post(this.url, body).subscribe(
        (response) => {
          console.log('Solicitud POST exitosa', response);
          // Realiza las acciones necesarias con la respuesta de la API
        },
        (error) => {
          console.error('Error en la solicitud POST', error);
          // Maneja el error de la solicitud
        }
      );
    }else{
      console.error('Error en la solicitud POST, el id del producto ya existe');
    }
    
  }
*/
  
  //constructor(public servicio: FormProdcutService) { }

/*  ngOnInit(form:modelFormProductI){
    this.servicio.enviarDatos(form).subscribe(data=>{
      console.log(data);
    })
  }*/
  /*
  obtenerDatos() {
    this.servicio.obtenerDatos().subscribe(
      (response) => {
        this.datosIngresados = response;
        console.log(this.datosIngresados);
      }
    );
  }


  enviarDatos() {
    const datos = {id: this.id, nombre: this.nombre, precio: this.precio, url_de_imagen: this.urlImagen  }; // Crear un objeto con los datos del formulario
    this.servicio.enviarDatos(this.datosIngresados).subscribe(
      datos=>{
        console.log("datos"+datos);
      }
      );
    }*/
    
}

