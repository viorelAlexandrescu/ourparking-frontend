import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInVehicleComponent } from './manage-in-vehicle.component';

describe('ManageInVehicleComponent', () => {
  let component: ManageInVehicleComponent;
  let fixture: ComponentFixture<ManageInVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageInVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
