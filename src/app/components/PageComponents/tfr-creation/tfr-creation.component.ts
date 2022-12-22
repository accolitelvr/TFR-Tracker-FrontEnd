import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChipEmitterService } from 'src/app/services/chip-emitter.service';

@Component({
  selector: 'app-tfr-creation',
  templateUrl: './tfr-creation.component.html',
  styleUrls: ['./tfr-creation.component.scss'],
})
export class TfrCreationComponent implements OnInit {
  milestoneForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
  });
  milestones = [{ name: 'milestone1' }, { name: 'milestone2' }];
  constructor(private chipEmitterService:ChipEmitterService) {}
  removalObserver = {next:((milestoneToRemove:any)=>{
    this.milestones = this.milestones.filter((value)=>{return value!=milestoneToRemove})})}
  ngOnInit(): void {
    this.chipEmitterService.ToRemove.subscribe(this.removalObserver);
  }
}
