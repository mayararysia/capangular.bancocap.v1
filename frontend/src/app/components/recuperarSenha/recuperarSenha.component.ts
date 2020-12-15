import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/model/usuario.model';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recuperarSenha',
  templateUrl: './recuperarSenha.component.html',
  styleUrls: ['./recuperarSenha.component.css']
  
})
export class recuperarSenhaComponent implements OnInit {

  usuario: Usuario = {};

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  // recuperarSenha(form: NgForm){
  //   alert("Um e-mail foi enviado para você!");
  //   this.router.navigate(['/login']);
  // }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Insira seu e-mail';
    }
    return this.email.hasError('email') ? 'Email não é válido' : '';
  }

  recuperarSenha(){
    alert("Um e-mail foi enviado para você!");
    this.router.navigate(['/login']);
  }

}
