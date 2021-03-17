import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationPyramidComponent } from './population-pyramid.component';

describe('PopulationPyramidComponent', () => {
  let component: PopulationPyramidComponent;
  let fixture: ComponentFixture<PopulationPyramidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationPyramidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationPyramidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
