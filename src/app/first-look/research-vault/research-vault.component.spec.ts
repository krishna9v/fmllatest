import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchVaultComponent } from './research-vault.component';

describe('ResearchVaultComponent', () => {
  let component: ResearchVaultComponent;
  let fixture: ComponentFixture<ResearchVaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchVaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
