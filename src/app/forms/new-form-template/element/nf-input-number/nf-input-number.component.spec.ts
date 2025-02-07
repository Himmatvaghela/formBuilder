import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfInputNumberComponent } from './nf-input-number.component';

describe('NfInputNumberComponent', () => {
  let component: NfInputNumberComponent;
  let fixture: ComponentFixture<NfInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfInputNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
