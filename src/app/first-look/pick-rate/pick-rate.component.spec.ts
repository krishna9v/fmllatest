import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickRateComponent } from './pick-rate.component';

describe('PickRateComponent', () => {
  let component: PickRateComponent;
  let fixture: ComponentFixture<PickRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
