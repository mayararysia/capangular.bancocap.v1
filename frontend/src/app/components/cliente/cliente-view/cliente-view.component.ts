import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.component.html',
  styleUrls: ['./cliente-view.component.css']
})
export class ClienteViewComponent implements OnInit {

  mock_cliente: Cliente = {
    cpf: '341.000.658-44', 
    nome: "Sophie"
  }

  clientes: Cliente [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe(clientes => {
      this.clientes = clientes;
      console.log(this.clientes);
    });
  } 

}
