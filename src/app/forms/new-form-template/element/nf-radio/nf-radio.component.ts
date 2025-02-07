import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilderServiceService } from '../../form-builder-service.service';

@Component({
  selector: 'app-nf-radio',
  templateUrl: './nf-radio.component.html',
  styleUrls: ['./nf-radio.component.css'],
})
export class NfRadioComponent implements OnInit {
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

  returnStyle() {
    if (this.elementObj) {
      return {
        width: this.elementObj.container.width + 'px' || '100%',
        'height.px': this.elementObj.container.height,
        'margin-left': this.elementObj.container.margin.left + 'px',
        'margin-right': this.elementObj.container.margin.right + 'px',
        'margin-top': this.elementObj.container.margin.top + 'px',
        'margin-bottom': this.elementObj.container.margin.bottom + 'px',
        'padding-left': this.elementObj.container.padding.left + 'px',
        'padding-right': this.elementObj.container.padding.right + 'px',
        'padding-top': this.elementObj.container.padding.top + 'px',
        'padding-bottom': this.elementObj.container.padding.bottom + 'px',
        'flex-direction': this.elementObj.format.direction,
        color: this.elementObj.format?.text_color
          ? this.elementObj.format.text_color
          : '#000000',
        'text-align': this.elementObj.format?.text_align
          ? this.elementObj.format.text_align
          : '',
        'font-weight': this.elementObj.format?.isBold ? 'bold' : 'normal',
        'font-family': this.elementObj?.format?.font_family,
        'font-style': this.elementObj.format?.isItalic ? 'italic' : 'normal',
        'text-decoration': this.elementObj.format?.isUnderline
          ? 'underline'
          : this.elementObj.format?.strikethrough
          ? 'line-through'
          : 'none',
        'font-size': this.elementObj.format?.font_size
          ? this.elementObj.format.font_size + 'px'
          : '12px',
        'text-shadow':
          '0px' + ' ' + '-1px' + ' ' + this.elementObj.format?.text_outline,
        'background-color': this.elementObj.container?.background_color
          ? this.elementObj.allow_editing
            ? this.elementObj.container?.background_color
            : '#e4e4e4'
          : this.elementObj.allow_editing
          ? '#FFFFFF'
          : '#e4e4e4',
      };
    }
    return {};
  }
}
