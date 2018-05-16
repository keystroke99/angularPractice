import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatevalidationComponent } from './datevalidation.component';

describe('DatevalidationComponent', () => {
  let component: DatevalidationComponent;
  let fixture: ComponentFixture<DatevalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatevalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
