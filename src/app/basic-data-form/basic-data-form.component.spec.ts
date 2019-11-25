import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataFormComponent } from './basic-data-form.component';

describe('BasicDataFormComponent', () => {
  let component: BasicDataFormComponent;
  let fixture: ComponentFixture<BasicDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
