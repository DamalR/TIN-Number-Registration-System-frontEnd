import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinNumberFormComponent } from './tin-number-form.component';

describe('TinNumberFormComponent', () => {
  let component: TinNumberFormComponent;
  let fixture: ComponentFixture<TinNumberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TinNumberFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TinNumberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
