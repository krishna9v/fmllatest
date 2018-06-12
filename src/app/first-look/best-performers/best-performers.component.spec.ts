import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPerformersComponent } from './best-performers.component';

describe('BestPerformersComponent', () => {
  let component: BestPerformersComponent;
  let fixture: ComponentFixture<BestPerformersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestPerformersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPerformersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
