import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoPlay2Component } from './howto-play2.component';

describe('HowtoPlay2Component', () => {
  let component: HowtoPlay2Component;
  let fixture: ComponentFixture<HowtoPlay2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowtoPlay2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtoPlay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
