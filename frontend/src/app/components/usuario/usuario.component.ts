import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
  
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario = {};
  submitted: boolean = false;
  emailValido: boolean = false;

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Insira seu e-mail';
    }
    return this.email.hasError('email') ? 'Email não é válido' : '';
  }

  cadastroUsuario(){
    this.loginService.inserirUsuario(this.usuario);
    alert("Sucesso no cadastro! Faça seu login...");
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.submitted = true;
  }
}
