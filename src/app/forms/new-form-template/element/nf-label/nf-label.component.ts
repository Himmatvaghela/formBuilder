import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilderServiceService } from '../../form-builder-service.service';

@Component({
  selector: 'app-nf-label',
  templateUrl: './nf-label.component.html',
  styleUrls: ['./nf-label.component.css'],
})
export class NfLabelComponent implements OnInit {
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
    this.elementObj.labelName = this.elementObj.labelName
      ? this.elementObj.labelName
      : '';
  }

  onOperatorDelete() {
    this.formBuilderService.isPropertyPanelOpenSetter(null);
    this.deleteElement.emit({ element: this.elementObj, index: this.index });
  }

  openPropertyPanel(event: any) {
    event.stopPropagation();
    this.formBuilderService.isPropertyPanelOpenSetter(this.elementObj);
  }

  getElementStyle() {
    return {
      backgroundColor: this.elementObj.container.background_color,
      'padding-top': this.elementObj.container.padding.top + 'px',
      'padding-bottom': this.elementObj.container.padding.bottom + 'px',
      'padding-left': this.elementObj.container.padding.left + 'px',
      'padding-right': this.elementObj.container.padding.right + 'px',
      color: this.elementObj.format.text_color,
      'text-align': this.elementObj.format.text_align,
      'font-weight': this.elementObj.format.isBold ? 'bold' : 'normal',
      'font-style': this.elementObj.format.isItalic ? 'italic' : 'normal',
      'text-shadow':
        '0px' + ' ' + '-1px' + ' ' + this.elementObj.format.text_outline,
      'width.px': this.elementObj.container.width,
      'height.px': this.elementObj.container.height,
      'margin-top': this.elementObj.container.margin.top + 'px',
      'margin-bottom': this.elementObj.container.margin.bottom + 'px',
      'margin-left': this.elementObj.container.margin.left + 'px',
      'margin-right': this.elementObj.container.margin.right + 'px',
      'font-size': this.elementObj.format.font_size + 'px',
      'font-family': this.elementObj?.format?.font_family,
    };
  }
}
