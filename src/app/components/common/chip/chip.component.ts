import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChipEmitterService } from 'src/app/services/chip-emitter.service';
@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Input('value') value: any;
  isSelected: boolean = false;
  @Output() selectEmitter = new EventEmitter<any>();
  @Output() removeEmitter = new EventEmitter<any>();

  constructor(private chipEmitterService: ChipEmitterService) {}
  remove(input: any) {
    this.selectEmitter.emit(this.value);
  }
  ngOnInit(): void {}
  click(event: any) {
    this.removeEmitter.emit(this.value);
  }
}
