import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { FormProdcutService } from '../form-prodcut.service';
//import { ApiService } from '../form-prodcut.service';
import {modelFormProductI} from '../models/model-form-product.interface'

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

  //datos: any;

  guardarDatos(): void {
    this.datosIngresados = {
      id: this.id,
      nombre: this.nombre,
      precio: this.precio,
      urlImagen: this.urlImagen
    };
  }

  constructor(private http: HttpClient) { }
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
    public enviarPost() {
      const url = 'http://localhost:8000/api/Create_product'; // Reemplaza esta URL con la dirección de tu API
      const body = { id: this.id, nombre: this.nombre, precio: this.precio, url_de_imagen: this.urlImagen}; // Reemplaza esto con el cuerpo de tu solicitud POST
    
      this.http.post(url, body).subscribe(
        (response) => {
          console.log('Solicitud POST exitosa', response);
          // Realiza las acciones necesarias con la respuesta de la API
        },
        (error) => {
          console.error('Error en la solicitud POST', error);
          // Maneja el error de la solicitud
        }
      );
    }
    
}

