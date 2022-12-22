import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChipEmitterService {
  @Output() ToRemove: EventEmitter<any> = new EventEmitter();
  @Output() ToSelect: EventEmitter<any> = new EventEmitter();
  RemoveObj(ObjToRemove: any) {
    this.ToRemove.emit(ObjToRemove);
  }
  SelectObj(ObjToSelect: any) {
    this.ToSelect.emit(ObjToSelect);
  }
  constructor() {}
}
