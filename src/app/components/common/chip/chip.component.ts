import { Component, Input, OnInit } from '@angular/core';
import { ChipEmitterService } from 'src/app/services/chip-emitter.service';
@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Input('input') input: any;
  constructor(private removalEmitterService:ChipEmitterService) {}
  remove() {this.removalEmitterService.emitObj(this.input)}
  ngOnInit(): void {}
}
