import {Injectable} from 'angular2/core';
@Injectable()
export class TestInjector {
  constructor() {
    alert(1);
  }
}