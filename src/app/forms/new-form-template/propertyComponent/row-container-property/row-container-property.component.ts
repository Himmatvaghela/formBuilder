import { Component, Input, OnInit } from '@angular/core';
import { FormBuilderServiceService } from '../../form-builder-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-row-container-property',
  templateUrl: './row-container-property.component.html',
  styleUrls: ['./row-container-property.component.css'],
})
export class RowContainerPropertyComponent implements OnInit {
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
    this.formBuilderService.isPropertyPanelOpenSetter(null);
  }

  saveDetails() {
    let data = this.propertyForm.value;
    this.elementObj.key = data.propertyName;
    this.elementObj.default_view = data.default_view;
    Swal.fire({ text: 'Saved Successfully', confirmButtonText: 'Ok' });
  }

  deleteElement() {
    console.log('row-prop', this.elementObj);
    this.formBuilderService.deleteSelectedOperatorSetter(this.elementObj);
  }
}
