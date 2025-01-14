import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
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

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  isSelected: boolean = false;
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
  }

  ngAfterViewInit(): void {
    this.initializeView();
    this.changeDetect.detectChanges();
  }

  initializeView() {
    console.log(this.elementObj);
    this.container.clear();
    this.elementObj.addedElements.forEach((res: any) => {
      let componentRef: any = this.container.createComponent(
        this.formBuilderService.findComponent(res.type)
      );
      componentRef.instance.elementObj = res;
      componentRef.instance.formData = this.formData;
    });
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
    console.log('event');
    event.preventDefault();
  }

  openPropertyPanel(event: any) {
    event.stopPropagation();
    this.formBuilderService.isPropertyPanelOpenSetter(this.elementObj);
  }
}
