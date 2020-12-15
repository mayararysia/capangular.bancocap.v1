import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components filhos
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeNavegacaoComponent } from './components/template/home-navegacao/home-navegacao.component';
import { ClienteViewComponent } from './components/cliente/cliente-view/cliente-view.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { SaqueComponent } from './components/saque/saque.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { DepositoViewComponent } from './components/deposito/deposito-view/deposito-view.component';
import { SaqueViewComponent } from './components/saque/saque-view/saque-view.component';
import { TransferenciaViewComponent } from './components/transferencia/transferencia-view/transferencia-view.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

//imports do Material Design
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ContaComponent } from './components/conta/conta.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { ContaViewComponent } from './components/conta/conta-view/conta-view.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { recuperarSenhaComponent } from './components/recuperarSenha/recuperarSenha.component';
import { HttpClientModule } from '@angular/common/http';

import { AppConfig } from './../app/token';
import { LoggerService } from './services/logger/logger.service';

//import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

// import { AgGridModule } from 'ag-grid-angular';

// //Moeda
// export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
//   align: "right",
//   allowNegative: true,
//   decimal: ",",
//   precision: 2,
//   prefix: "R$ ",
//   suffix: "",
//   thousands: "."
// };

// //Data local
// import { registerLocaleData } from '@angular/common';
// import localeBr from '@angular/common/locales/pt';

// registerLocaleData(localeBr, 'pt');

const maskConfig: Partial<IConfig> = {
  validation: false,
};

const APP_CONFIG: Config = Object.freeze({
  serviceURL: "http://localhost:3001",
  IsDevelopmentEnv: true,
  backgroundColor: "white"
})

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeNavegacaoComponent,
    HomeComponent,
    ClienteComponent,
    ContaComponent,
    ClienteViewComponent,
    ContaViewComponent,
    LoginComponent,
    LoginComponent,
    UsuarioComponent,
    recuperarSenhaComponent,
    DepositoComponent,
    SaqueComponent,
    TransferenciaComponent,
    ExtratoComponent, 
    DepositoViewComponent, 
    SaqueViewComponent ,
    TransferenciaViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    // CurrencyMaskModule,
    // AgGridModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  // providers: [{provide: LOCALE_ID, useValue: 'pt-BR'},
  //             { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }],
  providers: [
    { provide: LoggerService, useClass: LoggerService },
    { provide: AppConfig, useValue: APP_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

interface Config {
  serviceURL?:string,
  IsDevelopmentEnv?:boolean,
  backgroundColor?: string
}
