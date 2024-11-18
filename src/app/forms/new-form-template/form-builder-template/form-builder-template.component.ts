import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { rowContainer } from '../../forms.dto';
import { FormBuilderServiceService } from '../form-builder-service.service';

@Component({
  selector: 'app-form-builder-template',
  templateUrl: './form-builder-template.component.html',
  styleUrls: ['./form-builder-template.component.css'],
})
export class FormBuilderTemplateComponent implements OnInit, OnChanges {
  constructor(
    private formBuilderService: FormBuilderServiceService,
    private changeDetect: ChangeDetectorRef
  ) {}

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  selectedPropertyType?: string;
  showPropertyPanel: boolean = false;
  propertyDetailsData: any;

  data = {
    formName: 'form123',
    userId: 3,
    addedElements: [] as any,
  };

  ngOnInit(): void {
    // this.initializeView();
    let obj = JSON.parse(JSON.stringify(rowContainer));
    obj = { ...obj, elementId: rowContainer.type + '-' + new Date().getTime() };
    this.data.addedElements.push(obj);
    // setTimeout(() => {
    //   this.initializeView();
    // }, 0);
    this.formBuilderService.isPropertyPanelOpen.subscribe((res: any) => {
      this.formBuilderService.showSelectedOperaterSetter(res);
      this.showPropertyPanel = true;
      this.selectedPropertyType = res.type;
      this.propertyDetailsData = res;
    });
  }

  ngAfterViewInit(): void {
    this.initializeView();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // setTimeout(() => {
    //   this.initializeView();
    // }, 0);
  }

  initializeView() {
    this.container.clear();
    console.log(this.data);
    this.data.addedElements.forEach((res: any) => {
      let componentRef: any = this.container.createComponent(
        this.formBuilderService.findComponent(res.type)
      );
      componentRef.instance.elementObj = res;
      componentRef.instance.formData = this.data;
    });
    this.changeDetect.detectChanges();
  }

  addRow() {
    let obj = JSON.parse(JSON.stringify(rowContainer));
    obj = { ...obj, elementId: rowContainer.type + '-' + new Date().getTime() };
    this.data.addedElements.push(obj);
    this.initializeView();
  }

  drag(event: any, value: string) {
    let obj = JSON.parse(
      JSON.stringify(
        this.formBuilderService.getElementsPropertiesWithName(value)
      )
    );
    obj.elementId = obj.type + '-' + Date.now();
    event.dataTransfer.setData('type', JSON.stringify(obj));
  }

  addRowToForm() {
    let obj = JSON.parse(JSON.stringify(rowContainer));
    obj = { ...obj, elementId: rowContainer.type + '-' + new Date().getTime() };

    this.data.addedElements.push(obj);
    //localStorage.setItem("customTemplateData", JSON.stringify(this.customForm))
    this.initializeView();
  }
}
