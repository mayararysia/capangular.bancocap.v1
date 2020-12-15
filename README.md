# capangular.bancocap.v1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

**Challenge - Legacy POC (Individual) - Banco Cap**

Uma nova feature foi solicitada para ser implementada no sistema Banco Cap, e deverá seguir as seguintes regras:

**Depósito**

Uma tela de depósito deverá ser construída com os seguintes campos: DataHora (preencher de forma automática com a data/hora atual), Valor e Hash da Conta;
Exibir um erro caso QUALQUER campo não seja preenchido.

**Saque**

Uma tela de saque deverá ser construída com os seguintes campos: DataHora (preencher de forma automática com a data/hora atual), Valor e Hash da Conta;
Exibir um erro caso QUALQUER campo não seja preenchido.

**Transferência**

Uma tela de transferência deverá ser construída com os seguintes campos: DataHora (preencher de forma automática com a data/hora atual), Valor, Hash da Conta de Origem e Hash da Conta de Destino;
Exibir um erro caso QUALQUER campo não seja preenchido.

**Extrato**

- Uma tela exibindo o extrato (grid) deverá ser construída, e os seguintes campos deverão ser demonstrados: 
- Data/Hora, 
- Valor, 
- Tipo de Operação (Depósito, Saque ou Transferência) 
- e, em se tratando de transferência, o Hash da Conta de Origem da transferência.

**Premissas:**

Obedecer os mesmo critérios e regras do sistema Banco Cap desenvolvido em grupo, incluindo padrões visuais;
Incluir os novos itens de menu na tela para garantir o funcionamento do fluxo de navegação em todo o sistema.

**Repositório:**
[GitHub]/capangular.bancocap.v1


## Run BACK-END - Instrução

Entre na pasta server via prompt de comando e os comandos digite:

```
npm install
npm start
```

## Run FRONT-END - Instrução

Entre na pasta via prompt de comando e os comandos digite:

```
npm install
npm start ou ng serve
```

Acesse a aplicação no navegador: localhost:4200
