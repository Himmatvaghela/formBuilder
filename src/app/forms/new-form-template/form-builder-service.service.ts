import { Injectable } from '@angular/core';
import { InputComponent } from './element/input/input.component';
import { RowContainerComponent } from './element/row-container/row-container.component';
import { GridData } from '../forms.dto';
import { Subject } from 'rxjs';
import { CheckBoxComponent } from './element/check-box/check-box.component';
import { NfSingleSelectComponent } from './element/nf-single-select/nf-single-select.component';
import { NfMultiSelectComponent } from './element/nf-multi-select/nf-multi-select.component';
import { NfRadioComponent } from './element/nf-radio/nf-radio.component';
import { NfInputNumberComponent } from './element/nf-input-number/nf-input-number.component';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderServiceService {
  constructor() {}

  showSelectedOperater = new Subject();
  isPropertyPanelOpen = new Subject();
  deleteSelectedOperator = new Subject();

  componentList = [
    {
      name: 'nf_input_text',
      component: InputComponent,
    },
    {
      name: 'nf_input_number',
      component: NfInputNumberComponent,
    },
    {
      name: 'row',
      component: RowContainerComponent,
    },
    {
      name: 'nf_checkbox',
      component: CheckBoxComponent,
    },
    {
      name: 'nf_single_select',
      component: NfSingleSelectComponent,
    },
    {
      name: 'nf_multi_select',
      component: NfMultiSelectComponent,
    },
    {
      name: 'nf_radio',
      component: NfRadioComponent,
    },
    // {
    //   name: 'text',
    //   component: ITextFieldComponent,
    // },
  ];

  findComponent(name: string): any {
    return this.componentList.find((val) => val.name == name)?.component;
  }

  getElementsPropertiesWithName(type: string): any {
    return GridData.find((document) => document.type == type);
  }

  customFormData: any = {};
  setCustomFormData() {
    localStorage.setItem(
      'customTemplateData',
      JSON.stringify(this.customFormData)
    );
  }

  showSelectedOperaterSetter(elementId: any) {
    this.showSelectedOperater.next(elementId);
  }

  isPropertyPanelOpenSetter(elementObj: any) {
    this.isPropertyPanelOpen.next(elementObj);
  }

  deleteSelectedOperatorSetter(data: any) {
    this.deleteSelectedOperator.next(data);
  }
}
