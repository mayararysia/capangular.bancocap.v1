import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import {  Observable } from 'rxjs';
import { Conta } from '../models/conta.model';
import { AppConfig } from './../token';
import { LoggerService } from './logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(
    private httpClient: HttpClient,
    @Inject(LoggerService) private loggerService:LoggerService,
    @Inject(AppConfig) private appConfig: Config
  ) { }

  private url = this.appConfig.serviceURL + "/contas";

    public listarContas(): Observable<Conta[]> {
        this.loggerService.log("listarContas foi chamado...");
        this.loggerService.log(this.url);
        return this.httpClient.get<Conta[]>(this.url);
    }

    public criarContas(conta: Conta) {
        this.loggerService.log("criarContas foi chamado...");
        this.loggerService.log(this.url);
        return this.httpClient.post<Conta>(this.url, conta).subscribe();
    }

    public buscarContaPorId(): Observable<Conta> {
        this.loggerService.log("buscarContaPorId foi chamado...");
        this.loggerService.log(this.url);
        return this.httpClient.get<Conta>(this.url);
    }

    public atualizarConta(conta: Conta): Observable<Conta>{
        this.loggerService.log("atualizarConta foi chamado...");
        this.loggerService.log(this.url);
        return this.httpClient.put<Conta>(`${this.url}/${conta.id}`, conta);
    }

    public removerContaPorId(id: number): Observable<Conta> {
        this.loggerService.log("removerContaPorId foi chamado...");
        this.loggerService.log(this.url);
        return this.httpClient.delete<Conta>(`${this.url}/${id}`);
    }
}

interface Config {
    serviceURL?:string,
    IsDevelopmentEnv?:boolean
}
  