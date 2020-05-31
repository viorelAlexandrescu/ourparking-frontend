import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleParkingZoneComponent } from './single-parking-zone.component';

describe('SingleParkingZoneComponent', () => {
  let component: SingleParkingZoneComponent;
  let fixture: ComponentFixture<SingleParkingZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleParkingZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleParkingZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
