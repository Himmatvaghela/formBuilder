import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormBuilderServiceService } from '../../form-builder-service.service';

@Component({
  selector: 'app-row-container',
  templateUrl: './row-container.component.html',
  styleUrls: ['./row-container.component.css'],
})
export class RowContainerComponent implements OnInit {
  constructor(
    private formBuilderService: FormBuilderServiceService,
    private changeDetect: ChangeDetectorRef
  ) {}

  @Input() elementObj: any;
  @Input() formData: any;
  @Input() index!: number;

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  isSelected: boolean = false;
  @Output() deleteElement = new EventEmitter();

  ngOnInit(): void {
    // this.initializeView();
    // setTimeout(() => {
    //   this.initializeView();
    // }, 0);
    this.formBuilderService.showSelectedOperater.subscribe((res: any) => {
      this.isSelected = false;
      if (this.elementObj.elementId == res.elementId) {
        this.isSelected = true;
      }
    });

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

  ngAfterViewInit(): void {
    this.initializeView();
    this.changeDetect.detectChanges();
  }

  initializeView() {
    this.container.clear();
    this.elementObj.addedElements.forEach((res: any, index: number) => {
      let componentRef: any = this.container.createComponent(
        this.formBuilderService.findComponent(res.type)
      );
      componentRef.instance.elementObj = res;
      componentRef.instance.formData = this.formData;
      componentRef.instance.index = index;

      componentRef.instance.deleteElement.subscribe((res: any) => {
        this.deleteSelectedElement(res);
      });
    });
  }

  deleteSelectedElement(obj: any) {
    this.elementObj.addedElements.splice(obj.index, 1);
    this.formBuilderService.isPropertyPanelOpenSetter(null);
    this.formBuilderService.setCustomFormData();
    this.initializeView();
  }

  drop(event: any) {
    event.stopPropagation();
    let obj = JSON.parse(event.dataTransfer.getData('type'));
    //event.preventDefault();
    if (obj) {
      obj.referenceId = this.elementObj.elementId;
      this.elementObj.addedElements.push(obj);
      // this.formBuilderService.setCustomFormData();
      this.initializeView();
    }
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  openPropertyPanel(event: any) {
    event.stopPropagation();
    this.formBuilderService.isPropertyPanelOpenSetter(this.elementObj);
  }

  returnStyle() {
    return {
      'width.px': this.elementObj.container.width,
      'min-height.px': this.elementObj.container.height,
      'margin-left': this.elementObj.container.margin.left + 'px',
      'margin-right': this.elementObj.container.margin.right + 'px',
      'margin-top': this.elementObj.container.margin.top + 'px',
      'margin-bottom': this.elementObj.container.margin.bottom + 'px',
      'padding-left': this.elementObj.container.padding.left + 'px',
      'padding-right': this.elementObj.container.padding.right + 'px',
      'padding-top': this.elementObj.container.padding.top + 'px',
      'padding-bottom': this.elementObj.container.padding.bottom + 'px',
      'background-color': this.elementObj.container.background_color,
      'flex-direction': this.elementObj.format.direction,
      'align-items': this.elementObj.format.vertical,
      'justify-content': this.elementObj.format.horizontal,
      'border-top':
        this.elementObj.container.border_top +
        'px solid' +
        this.elementObj.container.border_color,
      'border-bottom':
        this.elementObj.container.border_bottom +
        'px solid' +
        this.elementObj.container.border_color,
      'border-left':
        this.elementObj.container.border_left +
        'px solid' +
        this.elementObj.container.border_color,
      'border-right':
        this.elementObj.container.border_right +
        'px solid' +
        this.elementObj.container.border_color,
    };
  }
}
