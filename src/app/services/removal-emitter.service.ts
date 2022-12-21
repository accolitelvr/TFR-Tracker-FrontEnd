import { Injectable, Output } from '@angular/core';
import { emit } from 'process';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemovalEmitterService {
  @Output() Output: EventEmitter<any> = new EventEmitter();
  emitObj(ObjToRemove:any) {
      this.Output.emit(ObjToRemove);
  }
  constructor() { }
}
