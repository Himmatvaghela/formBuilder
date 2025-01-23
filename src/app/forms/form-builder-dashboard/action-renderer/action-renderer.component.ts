import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-action-renderer',
  templateUrl: './action-renderer.component.html',
  styleUrls: ['./action-renderer.component.css'],
})
export class ActionRendererComponent {
  params: any;

  constructor() {}
  agInit(params: ICellRendererParams<any, any>): void {
    this.params = params;
  }
  refresh(_params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  renderForm() {
    this.params.context.componentParent.renderFormInTab(this.params.data);
  }

  deleteForm() {
    this.params.context.componentParent.deleteForm(this.params.data.id);
  }

  editForm() {
    this.params.context.componentParent.editFormInTab(this.params.data);
  }

  // openForm(mode: string) {
  //   this.params.context.componentParent.openForm(mode, this.params.data);
  // }

  // cloneForm() {
  //   this.params.context.componentParent.openCloneForm(this.params.data);
  // }
}
