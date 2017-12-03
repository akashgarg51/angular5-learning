import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Asgmt3DirectivesComponent } from './asgmt3-directives.component';

describe('Asgmt3DirectivesComponent', () => {
  let component: Asgmt3DirectivesComponent;
  let fixture: ComponentFixture<Asgmt3DirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Asgmt3DirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Asgmt3DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
