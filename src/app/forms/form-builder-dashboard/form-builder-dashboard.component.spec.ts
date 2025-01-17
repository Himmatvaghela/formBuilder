import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderDashboardComponent } from './form-builder-dashboard.component';

describe('FormBuilderDashboardComponent', () => {
  let component: FormBuilderDashboardComponent;
  let fixture: ComponentFixture<FormBuilderDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuilderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
