import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezoneComponentComponent } from './timezone-component.component';

describe('TimezoneComponentComponent', () => {
  let component: TimezoneComponentComponent;
  let fixture: ComponentFixture<TimezoneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimezoneComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimezoneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
