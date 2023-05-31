/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {modelFormProductI} from '../app/models/model-form-product.interface';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FormProdcutService {
  private apiUrl:string = 'http://localhost:8000/api/Create_product'
  constructor(private http: HttpClient) { }

  obtenerDatos() {
    return this.http.get('http://localhost:8000//api/read_product');
  }

  
  
  enviarDatos(form: modelFormProductI){
    let direction  = this.apiUrl
    return this.http.post(direction, form);  
  }
}
*/
//Se presenta un error 405 al querer enviar los datos desde el formulario, pero el error está corriendo 
//desde la conexion con la Api