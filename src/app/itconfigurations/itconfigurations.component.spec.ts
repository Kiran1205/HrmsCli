import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItconfigurationsComponent } from './itconfigurations.component';

describe('ItconfigurationsComponent', () => {
  let component: ItconfigurationsComponent;
  let fixture: ComponentFixture<ItconfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItconfigurationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItconfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
