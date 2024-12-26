import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsinfoComponent } from './hrmsinfo.component';

describe('HrmsinfoComponent', () => {
  let component: HrmsinfoComponent;
  let fixture: ComponentFixture<HrmsinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrmsinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrmsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
