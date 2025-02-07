import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormBuilderTemplateComponent } from './new-form-template/form-builder-template/form-builder-template.component';
import { InputComponent } from './new-form-template/element/input/input.component';
import { CheckBoxComponent } from './new-form-template/element/check-box/check-box.component';
import { InputPropertyComponent } from './new-form-template/propertyComponent/input-property/input-property.component';
import { CheckboxPropertyComponent } from './new-form-template/propertyComponent/checkbox-property/checkbox-property.component';
import { RowContainerComponent } from './new-form-template/element/row-container/row-container.component';
import { RowContainerPropertyComponent } from './new-form-template/propertyComponent/row-container-property/row-container-property.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import {
  NgbAccordionModule,
  NgbModule,
  NgbNavModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilderDashboardComponent } from './form-builder-dashboard/form-builder-dashboard.component';
import { AgGridComponent } from '../common/ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionRendererComponent } from './form-builder-dashboard/action-renderer/action-renderer.component';
import { NfRadioComponent } from './new-form-template/element/nf-radio/nf-radio.component';
import { NfSingleSelectComponent } from './new-form-template/element/nf-single-select/nf-single-select.component';
import { NfMultiSelectComponent } from './new-form-template/element/nf-multi-select/nf-multi-select.component';
import { NfInputNumberComponent } from './new-form-template/element/nf-input-number/nf-input-number.component';
import { NfInputNumberPropertyComponent } from './new-form-template/propertyComponent/nf-input-number-property/nf-input-number-property.component';
import { NfSingleSelectPropertyComponent } from './new-form-template/propertyComponent/nf-single-select-property/nf-single-select-property.component';
import { NfMultiSelectPropertyComponent } from './new-form-template/propertyComponent/nf-multi-select-property/nf-multi-select-property.component';
import { NfRadioPropertyComponent } from './new-form-template/propertyComponent/nf-radio-property/nf-radio-property.component';
// import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    FormBuilderTemplateComponent,
    InputComponent,
    CheckBoxComponent,
    InputPropertyComponent,
    CheckboxPropertyComponent,
    RowContainerComponent,
    RowContainerPropertyComponent,
    FormBuilderDashboardComponent,
    AgGridComponent,
    ActionRendererComponent,
    NfRadioComponent,
    NfSingleSelectComponent,
    NfMultiSelectComponent,
    NfInputNumberComponent,
    NfInputNumberPropertyComponent,
    NfSingleSelectPropertyComponent,
    NfMultiSelectPropertyComponent,
    NfRadioPropertyComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FeatherModule.pick(allIcons),
    NgbModule,
    NgbNavModule,
    NgbAccordionModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FormModule {}
