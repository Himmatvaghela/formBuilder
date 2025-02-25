import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilderServiceService } from '../../form-builder-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nf-label-property',
  templateUrl: './nf-label-property.component.html',
  styleUrls: ['./nf-label-property.component.css'],
})
export class NfLabelPropertyComponent implements OnInit {
  constructor(private formBuilderService: FormBuilderServiceService) {}

  @Input() elementObj: any;
  @Input() formData: any;

  propertyForm = new FormGroup({
    propertyName: new FormControl('', [Validators.required]),
    labelName: new FormControl(''),
    default_view: new FormControl('visible'),
  });

  ngOnInit(): void {
    this.propertyForm.patchValue({
      propertyName: this.elementObj.key,
      labelName: this.elementObj.labelName,
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
    this.elementObj.labelName = data.labelName;
    Swal.fire({ text: 'Saved Successfully', confirmButtonText: 'Ok' });
  }

  deleteElement() {
    this.formBuilderService.deleteSelectedOperatorSetter(this.elementObj);
  }
}
