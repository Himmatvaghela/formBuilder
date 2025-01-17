import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilderServiceService } from '../new-form-template/form-builder-service.service';

@Component({
  selector: 'app-form-builder-dashboard',
  templateUrl: './form-builder-dashboard.component.html',
  styleUrls: ['./form-builder-dashboard.component.css'],
})
export class FormBuilderDashboardComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private formBuilderService: FormBuilderServiceService
  ) {}

  subFormBuilders: any = [];
  counter = this.subFormBuilders.length + 1;
  active: any = 0;
  selectedFormData: any = {};

  createForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    created_by: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.active = Number(localStorage.getItem('active'));
    this.selectedFormData = JSON.parse(
      localStorage.getItem('customTemplateData') as string
    );
    this.subFormBuilders = JSON.parse(
      localStorage.getItem('subFormBuilders') as string
    );
  }

  closeTab(event: any, formIndex: number) {
    this.subFormBuilders.splice(formIndex, 1);
    if (this.subFormBuilders.length == 0) {
      this.active = 0;
    } else if (formIndex === this.subFormBuilders.length) {
      this.active = this.subFormBuilders.length;
      this.onTabSwitch(this.subFormBuilders[this.active - 1]);
    } else {
      this.active = formIndex + 1;
      this.onTabSwitch(this.subFormBuilders[this.active - 1]);
    }

    localStorage.setItem(
      'subFormBuilders',
      JSON.stringify(this.subFormBuilders)
    );
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  onTabSwitch(tabData: any) {
    localStorage.setItem('active', this.active);
    this.selectedFormData = tabData;
    localStorage.setItem(
      'customTemplateData',
      JSON.stringify(this.selectedFormData)
    );
  }

  createNewForm() {
    console.log(this.createForm.value);
    let data = this.createForm.value;
    this.selectedFormData = {
      isRender: false,
      name: data.name,
      description: data.description,
      frame: {
        background_color: '#ffffff',
        width: 800,
        height: 500,
      },
      addedElements: [],
      created_by: data.created_by,
      // userId: localStorage.getItem('userId'),
      // productName: this.createForm.get('product').value,
      // tag: this.createForm.get('tags').value,
      // selectedTemplate: this.selectedTemplate,
      // mappedTemplate: this.createForm.get('mappedTemplate').value,
      // responsive: true,
      // istemplate: this.isTemplate,
      // elementId: '',
    };
    let obj = JSON.parse(
      JSON.stringify(
        this.formBuilderService.getElementsPropertiesWithName('row')
      )
    );
    let uniqueID = Date.now();
    obj.elementId = obj.type + '-' + uniqueID;
    obj.hideDeleteOption = true;
    this.selectedFormData.addedElements.push(obj);

    this.subFormBuilders.push(this.selectedFormData);
    this.active = this.subFormBuilders.length;
    localStorage.setItem('active', this.active);
    localStorage.setItem(
      'subFormBuilders',
      JSON.stringify(this.subFormBuilders)
    );
    localStorage.setItem(
      'customTemplateData',
      JSON.stringify(this.selectedFormData)
    );

    this.createForm.reset();
  }

  openModel(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  getAllForms() {
    this.active = 0;
    localStorage.setItem('active', this.active);
  }
}
