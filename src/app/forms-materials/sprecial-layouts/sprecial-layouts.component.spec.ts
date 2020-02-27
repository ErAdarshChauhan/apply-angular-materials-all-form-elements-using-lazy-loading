import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprecialLayoutsComponent } from './sprecial-layouts.component';

describe('SprecialLayoutsComponent', () => {
  let component: SprecialLayoutsComponent;
  let fixture: ComponentFixture<SprecialLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprecialLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprecialLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
