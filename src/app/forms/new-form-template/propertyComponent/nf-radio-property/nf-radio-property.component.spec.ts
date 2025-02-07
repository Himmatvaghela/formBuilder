import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfRadioPropertyComponent } from './nf-radio-property.component';

describe('NfRadioPropertyComponent', () => {
  let component: NfRadioPropertyComponent;
  let fixture: ComponentFixture<NfRadioPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfRadioPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfRadioPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
