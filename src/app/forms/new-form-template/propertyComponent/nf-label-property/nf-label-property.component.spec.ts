import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfLabelPropertyComponent } from './nf-label-property.component';

describe('NfLabelPropertyComponent', () => {
  let component: NfLabelPropertyComponent;
  let fixture: ComponentFixture<NfLabelPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfLabelPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfLabelPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
