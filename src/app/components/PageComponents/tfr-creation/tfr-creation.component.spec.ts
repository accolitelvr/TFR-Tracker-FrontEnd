import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfrCreationComponent } from './tfr-creation.component';

describe('TfrCreationComponent', () => {
  let component: TfrCreationComponent;
  let fixture: ComponentFixture<TfrCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfrCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfrCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
