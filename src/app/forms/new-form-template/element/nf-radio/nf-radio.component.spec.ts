import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfRadioComponent } from './nf-radio.component';

describe('NfRadioComponent', () => {
  let component: NfRadioComponent;
  let fixture: ComponentFixture<NfRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
