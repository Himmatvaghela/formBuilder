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

@NgModule({
  declarations: [
    FormBuilderTemplateComponent,
    InputComponent,
    CheckBoxComponent,
    InputPropertyComponent,
    CheckboxPropertyComponent,
    RowContainerComponent,
    RowContainerPropertyComponent,
  ],
  imports: [CommonModule, FormsRoutingModule],
})
export class FormsModule {}
