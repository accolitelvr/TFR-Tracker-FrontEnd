import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tfr-creation',
  templateUrl: './tfr-creation.component.html',
  styleUrls: ['./tfr-creation.component.scss']
})
export class TfrCreationComponent implements OnInit {
  milestoneForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

}
