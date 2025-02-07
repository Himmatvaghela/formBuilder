import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfMultiSelectPropertyComponent } from './nf-multi-select-property.component';

describe('NfMultiSelectPropertyComponent', () => {
  let component: NfMultiSelectPropertyComponent;
  let fixture: ComponentFixture<NfMultiSelectPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfMultiSelectPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfMultiSelectPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
