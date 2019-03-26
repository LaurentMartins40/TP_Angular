import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { describe } from 'mocha';

import { InterpolateComponent } from './interpolate.component';

describe('FormationComponent', () => {
  let component: InterpolateComponent;
  let fixture: ComponentFixture<InterpolateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
