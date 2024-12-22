import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdousersComponent } from './ddousers.component';

describe('DdousersComponent', () => {
  let component: DdousersComponent;
  let fixture: ComponentFixture<DdousersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdousersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
