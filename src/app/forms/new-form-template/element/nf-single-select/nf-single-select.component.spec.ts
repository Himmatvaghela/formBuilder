import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfSingleSelectComponent } from './nf-single-select.component';

describe('NfSingleSelectComponent', () => {
  let component: NfSingleSelectComponent;
  let fixture: ComponentFixture<NfSingleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfSingleSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfSingleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
