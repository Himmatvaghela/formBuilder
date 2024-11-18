import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowContainerPropertyComponent } from './row-container-property.component';

describe('RowContainerPropertyComponent', () => {
  let component: RowContainerPropertyComponent;
  let fixture: ComponentFixture<RowContainerPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowContainerPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowContainerPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
