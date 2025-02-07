import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfInputNumberPropertyComponent } from './nf-input-number-property.component';

describe('NfInputNumberPropertyComponent', () => {
  let component: NfInputNumberPropertyComponent;
  let fixture: ComponentFixture<NfInputNumberPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfInputNumberPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfInputNumberPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
