import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-container-property',
  templateUrl: './row-container-property.component.html',
  styleUrls: ['./row-container-property.component.css'],
})
export class RowContainerPropertyComponent implements OnInit {
  constructor() {}

  @Input() elementObj: any;
  @Input() formData: any;
  ngOnInit(): void {}
}
