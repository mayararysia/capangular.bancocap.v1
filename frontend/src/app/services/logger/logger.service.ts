import { Injectable } from '@angular/core';


export class LoggerService {

  constructor() { }

  log(message:any) {
    console.log(message);
  }

}
