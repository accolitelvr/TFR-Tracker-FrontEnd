import { Component, Input, OnInit } from '@angular/core';
import { RemovalEmitterService } from 'src/app/services/removal-emitter.service';
@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Input('input') input: any;
  constructor(private removalEmitterService:RemovalEmitterService) {}
  remove() {this.removalEmitterService.emitObj(this.input)}
  ngOnInit(): void {}
}
