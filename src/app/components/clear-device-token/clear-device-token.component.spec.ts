import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearDeviceTokenComponent } from './clear-device-token.component';

describe('ClearDeviceTokenComponent', () => {
  let component: ClearDeviceTokenComponent;
  let fixture: ComponentFixture<ClearDeviceTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearDeviceTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearDeviceTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
