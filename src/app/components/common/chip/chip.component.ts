import { Component, Input, OnInit } from '@angular/core';
import { ChipEmitterService } from 'src/app/services/chip-emitter.service';
@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Input('input') input: any;
  isSelected: boolean = false;
  constructor(private chipEmitterService:ChipEmitterService) {}
  remove() {this.chipEmitterService.RemoveObj(this.input)}
  ngOnInit(): void {}
  select() {
    if (this.isSelected){
      this.chipEmitterService.SelectObj(this.input);
    }
    else {
      this.chipEmitterService.SelectObj(null);
    }
  }
}
