import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxcomputeComponent } from './taxcompute.component';

describe('TaxcomputeComponent', () => {
  let component: TaxcomputeComponent;
  let fixture: ComponentFixture<TaxcomputeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxcomputeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxcomputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
