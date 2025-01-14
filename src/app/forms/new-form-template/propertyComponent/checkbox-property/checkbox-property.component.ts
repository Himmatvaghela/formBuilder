import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-property',
  templateUrl: './checkbox-property.component.html',
  styleUrls: ['./checkbox-property.component.css'],
})
export class CheckboxPropertyComponent implements OnInit {
  constructor() {}

  @Input() elementObj: any;
  @Input() formData: any;
  ngOnInit(): void {}
}
