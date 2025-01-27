import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilderServiceService } from '../../form-builder-service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor(private formBuilderService: FormBuilderServiceService) {}

  @Input() elementObj: any;
  @Input() formData: any;
  @Input() index!: number;
  @Output() deleteElement = new EventEmitter();
  isSelected: boolean = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.formBuilderService.showSelectedOperater.subscribe((res: any) => {
        this.isSelected = false;
        if (this.elementObj.elementId == res.elementId) {
          this.isSelected = true;
        }
      });
    }, 300);

    this.formBuilderService.deleteSelectedOperator.subscribe((val: any) => {
      if (val.elementId == this.elementObj.elementId) {
        this.onOperatorDelete();
      }
    });
  }

  onOperatorDelete() {
    this.formBuilderService.isPropertyPanelOpenSetter(null);
    this.deleteElement.emit({ element: this.elementObj, index: this.index });
  }

  openPropertyPanel(event: any) {
    event.stopPropagation();
    this.formBuilderService.isPropertyPanelOpenSetter(this.elementObj);
  }
}
