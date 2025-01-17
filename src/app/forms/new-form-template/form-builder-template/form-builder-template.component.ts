import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { rowContainer } from '../../forms.dto';
import { FormBuilderServiceService } from '../form-builder-service.service';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-builder-template',
  templateUrl: './form-builder-template.component.html',
  styleUrls: ['./form-builder-template.component.css'],
  providers: [NgbNavConfig],
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
  active: any = 3;
  hideSideBar: boolean = false;
  @Input('formDetails') customForm: any = { addedElements: [] };
  // data = {
  //   formName: 'form123',
  //   userId: 3,
  //   addedElements: [] as any,
  //   isRender: false,
  //   frame: {
  //     background_color: '#ffffff',
  //     width: '50px',
  //     height: '50px',
  //   },
  // };

  ngOnInit(): void {
    // this.initializeView();
    // let obj = JSON.parse(JSON.stringify(rowContainer));
    // obj = { ...obj, elementId: rowContainer.type + '-' + new Date().getTime() };
    // this.customForm.addedElements.push(obj);
    // setTimeout(() => {
    //   this.initializeView();
    // }, 0);
    this.formBuilderService.isPropertyPanelOpen.subscribe((res: any) => {
      if (res != null) {
        this.formBuilderService.showSelectedOperaterSetter(res);
        this.showPropertyPanel = true;
        this.selectedPropertyType = res.type;
        this.propertyDetailsData = res;
        this.active = 1;
      } else {
        this.formBuilderService.showSelectedOperaterSetter({ elementId: null });
        this.showPropertyPanel = false;
        this.selectedPropertyType = res;
        this.propertyDetailsData = res;
        this.active = 3;
      }
    });
    this.formBuilderService.customFormData = this.customForm;
    this.formBuilderService.setCustomFormData();
  }

  ngAfterViewInit(): void {
    this.initializeView();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // setTimeout(() => {
    //   this.initializeView();
    // }, 0);
  }

  toggleSidebar() {
    this.hideSideBar = !this.hideSideBar;
  }

  initializeView() {
    this.container.clear();
    console.log(this.customForm);
    this.customForm.addedElements.forEach((res: any) => {
      let componentRef: any = this.container.createComponent(
        this.formBuilderService.findComponent(res.type)
      );
      componentRef.instance.elementObj = res;
      componentRef.instance.formData = this.customForm;
    });
    this.changeDetect.detectChanges();
  }

  addRow() {
    let obj = JSON.parse(JSON.stringify(rowContainer));
    obj = { ...obj, elementId: rowContainer.type + '-' + new Date().getTime() };
    this.customForm.addedElements.push(obj);
    this.formBuilderService.setCustomFormData();
    this.initializeView();
  }

  drag(event: any, value: string, isGroup?: boolean) {
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

    this.customForm.addedElements.push(obj);
    //localStorage.setItem("customTemplateData", JSON.stringify(this.customForm))
    this.initializeView();
  }

  onPropertyPanelClose(event: any) {
    if (event.target.id == 'unfocused') {
      this.formBuilderService.isPropertyPanelOpenSetter(null);
    }
  }
}
