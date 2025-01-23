import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilderServiceService } from '../new-form-template/form-builder-service.service';
import { ColDef, GridOptions } from 'ag-grid-community';
import { ActionRendererComponent } from './action-renderer/action-renderer.component';

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

  subFormBuilders: any[] = [];
  counter = this.subFormBuilders.length + 1;
  active: any = 0;
  selectedFormData: any = {};
  savedFormsList: any[] = [];
  gridOptions!: GridOptions;

  createForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    created_by: new FormControl('', [Validators.required]),
  });

  colDefs: ColDef[] = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Description', field: 'description' },
    { headerName: 'Created BY', field: 'created_by' },
    { headerName: 'Action', cellRenderer: ActionRendererComponent },
  ];

  ngOnInit(): void {
    this.savedFormsList =
      JSON.parse(localStorage.getItem('savedFormList') as string) || [];
    this.active = Number(localStorage.getItem('active'));
    this.selectedFormData =
      JSON.parse(localStorage.getItem('customTemplateData') as string) || [];
    this.subFormBuilders =
      JSON.parse(localStorage.getItem('subFormBuilders') as string) || [];

    this.gridOptions = {
      context: {
        componentParent: this,
        key: 'Form',
      },
    };
  }

  deleteForm(id: any) {
    console.log('delete form', id);
    let subFormData =
      JSON.parse(localStorage.getItem('subFormBuilders') as string) || [];
    let ind = subFormData.findIndex((val: any) => id == val.id);
    if (ind >= 0) {
      subFormData.splice(ind, 1);
      this.subFormBuilders = subFormData;
      localStorage.setItem(
        'subFormBuilders',
        JSON.stringify(this.subFormBuilders)
      );
    }
    let allForms =
      JSON.parse(localStorage.getItem('savedFormList') as string) || [];
    let filteredData = allForms.filter((val: any) => val.id != id);
    this.savedFormsList = filteredData;
    localStorage.setItem('savedFormList', JSON.stringify(filteredData));
  }

  editFormInTab(editObj: any) {
    console.log('editForm', editObj);
    let subFormData =
      JSON.parse(localStorage.getItem('subFormBuilders') as string) || [];
    let ind = subFormData.findIndex((val: any) => editObj.id == val.id);
    if (ind < 0) {
      this.subFormBuilders.push(editObj);
      localStorage.setItem(
        'subFormBuilders',
        JSON.stringify(this.subFormBuilders)
      );
      this.active = this.subFormBuilders.length;
    } else {
      this.active = ind + 1;
    }
    this.onTabSwitch(editObj);
  }

  renderFormInTab(rendererObj: any) {
    console.log('render form', rendererObj);
  }

  closeTab(event: any, formIndex: number) {
    this.subFormBuilders.splice(formIndex, 1);
    if (this.subFormBuilders.length == 0) {
      this.getAllForms();
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
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
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
    this.savedFormsList =
      JSON.parse(localStorage.getItem('savedFormList') as string) || [];
  }
}
