import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormBuilderServiceService } from '../../form-builder-service.service';
import { Subject, takeUntil } from 'rxjs';

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
}
