import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemovalEmitterService {
  @Output() ToRemove: EventEmitter<any> = new EventEmitter();
  emitObj(ObjToRemove:any) {
      this.ToRemove.emit(ObjToRemove);
  }
  constructor() { }
}
