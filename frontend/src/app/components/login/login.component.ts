import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Validators,FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {};
  usuarios: Usuario[];
  error:boolean = false;
  errorUsuarioInvalido: string = "";
  submitted: boolean = false;

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

  login(form: NgForm){
    let usuario: Usuario = form.value;
    this.loginService.listarUsuarios().subscribe(res => {
      
      usuario = this.loginService.validarUsuario(usuario, res)
      usuario ? this.router.navigate(['/home']) : this.error = true, this.errorUsuarioInvalido = "Usuário não encontrado!";
    });
  }
  onSubmit() {
    this.submitted = true;
  }
  
}
