import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderTemplateComponent } from './form-builder-template.component';

describe('FormBuilderTemplateComponent', () => {
  let component: FormBuilderTemplateComponent;
  let fixture: ComponentFixture<FormBuilderTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
