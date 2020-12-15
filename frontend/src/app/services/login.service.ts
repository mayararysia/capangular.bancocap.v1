import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    
  constructor(private http: HttpClient) { }

    listarUsuarios(){

      return this.http.get<Usuario[]>('http://localhost:3001/usuarios'); 
    }

    
    validarUsuario(usuario: Usuario, listUsuarios: Usuario[]){
        
      return listUsuarios.find(item => item.email === usuario.email && item.senha === usuario.senha);
    }

   
    inserirUsuario(usuario: Usuario){

      this.http.post<Usuario>('http://localhost:3001/usuarios',usuario).subscribe();  
    }
}
