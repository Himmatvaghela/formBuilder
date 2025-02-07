import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { FormBuilderServiceService } from '../../form-builder-service.service';

@Component({
  selector: 'app-nf-radio-property',
  templateUrl: './nf-radio-property.component.html',
  styleUrls: ['./nf-radio-property.component.css'],
})
export class NfRadioPropertyComponent implements OnInit {
  constructor(private formBuilderService: FormBuilderServiceService) {}

  @Input() elementObj: any;
  @Input() formData: any;

  propertyForm = new FormGroup({
    propertyName: new FormControl('', [Validators.required]),
    default_view: new FormControl('visible'),
  });

  ngOnInit(): void {
    this.propertyForm.patchValue({
      propertyName: this.elementObj.key,
      default_view: this.elementObj.default_view,
    });
  }

  onPropertyPanelClose() {
    // setTimeout(() => {
    // }, 100);
    this.formBuilderService.isPropertyPanelOpenSetter(null);
  }

  saveDetails() {
    let data = this.propertyForm.value;
    this.elementObj.key = data.propertyName;
    this.elementObj.default_view = data.default_view;
    Swal.fire({ text: 'Saved Successfully', confirmButtonText: 'Ok' });
  }

  deleteElement() {
    this.formBuilderService.deleteSelectedOperatorSetter(this.elementObj);
  }
}
