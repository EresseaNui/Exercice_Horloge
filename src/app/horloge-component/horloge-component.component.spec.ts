import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorlogeComponentComponent } from './horloge-component.component';

describe('HorlogeComponentComponent', () => {
  let component: HorlogeComponentComponent;
  let fixture: ComponentFixture<HorlogeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorlogeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorlogeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
