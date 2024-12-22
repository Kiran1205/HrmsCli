import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionalsComponent } from './provisionals.component';

describe('ProvisionalsComponent', () => {
  let component: ProvisionalsComponent;
  let fixture: ComponentFixture<ProvisionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvisionalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvisionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
