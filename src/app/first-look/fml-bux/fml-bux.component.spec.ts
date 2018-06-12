import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmlBuxComponent } from './fml-bux.component';

describe('FmlBuxComponent', () => {
  let component: FmlBuxComponent;
  let fixture: ComponentFixture<FmlBuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmlBuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmlBuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
