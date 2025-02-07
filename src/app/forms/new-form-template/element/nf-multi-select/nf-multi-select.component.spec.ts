import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfMultiSelectComponent } from './nf-multi-select.component';

describe('NfMultiSelectComponent', () => {
  let component: NfMultiSelectComponent;
  let fixture: ComponentFixture<NfMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfMultiSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
