import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilderServiceService } from '../../form-builder-service.service';

@Component({
  selector: 'app-nf-multi-select',
  templateUrl: './nf-multi-select.component.html',
  styleUrls: ['./nf-multi-select.component.css'],
})
export class NfMultiSelectComponent implements OnInit {
  constructor(private formBuilderService: FormBuilderServiceService) {}

  @Input() elementObj: any;
  @Input() formData: any;
  @Input() index!: number;
  @Output() deleteElement = new EventEmitter();
  isSelected: boolean = false;
  isDropdownOpen: boolean = false;
  selectedValue: any[] = [];
  optionList: any = [
    { id: 0, value: 'Himmat' },
    { id: 1, value: 'Rahul' },
    { id: 2, value: 'Jagdish' },
  ];
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

  getElementStyle() {
    return {
      'padding-top': this.elementObj.container.padding.top + 'px',
      'padding-bottom': this.elementObj.container.padding.bottom + 'px',
      'padding-left': this.elementObj.container.padding.left + 'px',
      'padding-right': this.elementObj.container.padding.right + 'px',
      color: this.elementObj.format.text_color,
      'text-align': this.elementObj.format.text_align,
      'width.px': this.elementObj.container.width,
      'height.px': this.elementObj.container.height,
      'margin-top': this.elementObj.container.margin.top + 'px',
      'margin-bottom': this.elementObj.container.margin.bottom + 'px',
      'margin-left': this.elementObj.container.margin.left + 'px',
      'margin-right': this.elementObj.container.margin.right + 'px',
    };
  }

  singleSelectDropdownSettings(): any {
    if (this.elementObj) {
      return {
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

  selectValue(id: any, event: any) {
    event.stopPropagation();
    let ind = this.optionList.findIndex((val: any) => val.id == id);
    if (this.optionList[ind]?.isChecked) {
      this.optionList[ind].isChecked = !this.optionList[ind].isChecked;
    } else {
      this.optionList[ind].isChecked = true;
    }
    this.updateSelectedValue(this.optionList[ind]);
  }

  updateSelectedValue(obj: any) {
    let ind = this.selectedValue.findIndex((val: any) => val.id == obj.id);
    if (ind < 0) {
      this.selectedValue.push(obj);
    } else {
      this.selectedValue.splice(ind, 1);
    }
  }
}
