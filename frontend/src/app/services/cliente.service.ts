import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import {  Observable } from 'rxjs';
import { Cliente } from './../models/cliente.model';
import { AppConfig } from './../token';
import { LoggerService } from './logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private httpClient: HttpClient,
    @Inject(LoggerService) private loggerService:LoggerService,
    @Inject(AppConfig) private appConfig: Config
  ) { }

  private url = this.appConfig.serviceURL + "/clientes";

    public listarClientes(): Observable<Cliente[]> {
        this.loggerService.log("listarClientes foi chamado...");
        this.loggerService.log(this.url);
        return this.httpClient.get<Cliente[]>(this.url);
    }

    public criarCliente(cliente: Cliente) {
        this.loggerService.log("criarCliente foi chamado...");
        this.loggerService.log(this.url);
        return this.httpClient.post<Cliente>(this.url, cliente).subscribe();
    }

    public buscarClientePorId(): Observable<Cliente> {
        this.loggerService.log("buscarClientePorId foi chamado...");
        this.loggerService.log(this.url);
        return this.httpClient.get<Cliente>(this.url);
    }

    public atualizarCliente(cliente: Cliente): Observable<Cliente>{
        this.loggerService.log("atualizarCliente foi chamado...");
        this.loggerService.log(this.url);
        return this.httpClient.put<Cliente>(`${this.url}/${cliente.id}`, cliente);
    }

    public removerClientePorId(id: number): Observable<Cliente> {
        this.loggerService.log("removerClientePorId foi chamado...");
        this.loggerService.log(this.url);
        return this.httpClient.delete<Cliente>(`${this.url}/${id}`);
    }
}

interface Config {
    serviceURL?:string,
    IsDevelopmentEnv?:boolean
}
  