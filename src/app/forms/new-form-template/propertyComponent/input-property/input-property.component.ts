import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
})
export class InputPropertyComponent implements OnInit {
  constructor() {}

  @Input() elementObj: any;
  @Input() formData: any;
  ngOnInit(): void {}
}
