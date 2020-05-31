import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOutVehicleComponent } from './manage-out-vehicle.component';

describe('ManageOutVehicleComponent', () => {
  let component: ManageOutVehicleComponent;
  let fixture: ComponentFixture<ManageOutVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOutVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOutVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
