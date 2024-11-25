import { Injectable } from '@angular/core';
import { InputComponent } from './element/input/input.component';
import { RowContainerComponent } from './element/row-container/row-container.component';
import { GridData } from '../forms.dto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderServiceService {
  constructor() {}

  showSelectedOperater = new Subject();
  isPropertyPanelOpen = new Subject();
  componentList = [
    {
      name: 'nf_input_text',
      component: InputComponent,
    },
    {
      name: 'row',
      component: RowContainerComponent,
    },
  ];

  findComponent(name: string): any {
    return this.componentList.find((val) => val.name == name)?.component;
  }

  getElementsPropertiesWithName(type: string): any {
    return GridData.find((document) => document.type == type);
  }

  // customFormData: any = {};
  // setCustomFormData() {
  //   localStorage.setItem(
  //     'customTemplateData',
  //     JSON.stringify(this.customFormData)
  //   );
  // }

  showSelectedOperaterSetter(elementId: any) {
    this.showSelectedOperater.next(elementId);
  }

  isPropertyPanelOpenSetter(elementObj: any) {
    this.isPropertyPanelOpen.next(elementObj);
  }
}
