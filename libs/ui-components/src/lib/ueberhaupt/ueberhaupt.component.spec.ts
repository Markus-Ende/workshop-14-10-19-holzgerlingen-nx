import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UeberhauptComponent } from './ueberhaupt.component';

describe('UeberhauptComponent', () => {
  let component: UeberhauptComponent;
  let fixture: ComponentFixture<UeberhauptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UeberhauptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UeberhauptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
