import { Component, Input, OnInit } from '@angular/core';
import { ChipEmitterService } from 'src/app/services/chip-emitter.service';
@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Input('value') value: any;
  isSelected: boolean = false;
  constructor(private chipEmitterService:ChipEmitterService) {}
  remove(input:any) {console.log(input);this.chipEmitterService.RemoveObj(this.value)}
  ngOnInit(): void {}
  click(event:any) {
    console.log(event)
      this.chipEmitterService.SelectObj(this.value);
    }
  }
