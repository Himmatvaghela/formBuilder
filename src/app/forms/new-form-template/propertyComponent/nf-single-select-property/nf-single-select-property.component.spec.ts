import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfSingleSelectPropertyComponent } from './nf-single-select-property.component';

describe('NfSingleSelectPropertyComponent', () => {
  let component: NfSingleSelectPropertyComponent;
  let fixture: ComponentFixture<NfSingleSelectPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfSingleSelectPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfSingleSelectPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
