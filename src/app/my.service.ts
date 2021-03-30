import { Injectable } from "@angular/core";

@Injectable()
export default class MyInjectableService {
  do(): void {
    console.log("Hello 2!");
  }
}

