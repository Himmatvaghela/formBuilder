import { Component, Input, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css'],
})
export class AgGridComponent implements OnInit {
  constructor() {
    //this.context = { componentParent: this };
    this.getRowHeight = function () {
      return 50;
    };
  }

  @Input() rowData: any;
  @Input() colDefs: any;
  @Input() gridOptions: any;
  defaultColDef: ColDef = {
    minWidth: 200,
    flex: 1,
    filter: true,
    resizable: true,
    sortable: true,
  };
  getRowHeight: any;
  rowSelection: 'single' | 'multiple' = 'multiple';
  ngOnInit(): void {}
}
