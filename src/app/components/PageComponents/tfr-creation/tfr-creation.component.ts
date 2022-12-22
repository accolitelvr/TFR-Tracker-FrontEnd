import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChipEmitterService } from 'src/app/services/chip-emitter.service';
import { MilestoneManagerService } from 'src/app/services/milestone-manager.service';

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
  selectedMilestone:any;
  milestones = [{ name: 'milestone1' }, { name: 'milestone2' }];
  constructor(private chipEmitterService:ChipEmitterService,
              private milestoneManagerService:MilestoneManagerService) {}
  removalObserver = {next:((milestoneToRemove:any)=>this.milestoneManagerService.remove(milestoneToRemove))}
  selectionObserver = {next:((milestoneToSelect:any)=>{this.selectedMilestone=milestoneToSelect})}
  ngOnInit(): void {
    this.chipEmitterService.ToRemove.subscribe(this.removalObserver);
    this.chipEmitterService.ToSelect.subscribe(this.selectionObserver);
  }
}
