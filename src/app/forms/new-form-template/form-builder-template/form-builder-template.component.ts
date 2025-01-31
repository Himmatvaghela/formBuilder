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
import Swal from 'sweetalert2';

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
  format = {
    case_type: '',
    font_family: 'Lato',
    font_size: 12,
    horizontal_align: '',
    isBold: false,
    isItalic: false,
    isUnderline: false,
    strikethrough: false,
    text_align: '',
    text_color: '',
    text_outline: '',
    text_type: '',
    vertical_align: 'middle',
  };

  elementContainer: any = {
    background_color: '',
    border_color: '',
    border_radius: '5',
    padding: {
      bottom: '',
      left: '',
      right: '',
      top: '',
    },
    margin: {
      bottom: '',
      left: '',
      right: '',
      top: '',
    },
  };

  ngOnInit(): void {
    this.formBuilderService.isPropertyPanelOpen.subscribe((res: any) => {
      if (res != null) {
        this.formBuilderService.showSelectedOperaterSetter(res);
        this.showPropertyPanel = true;
        this.selectedPropertyType = res.type;
        this.propertyDetailsData = res;
        this.format = this.propertyDetailsData.format;
        this.active = 1;
        console.log(this.propertyDetailsData);
      } else {
        this.formBuilderService.showSelectedOperaterSetter({ elementId: null });
        this.showPropertyPanel = false;
        this.selectedPropertyType = res;
        this.propertyDetailsData = res;
        this.active = 3;
      }
      this.elementContainer = this.propertyDetailsData.container;
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
    this.customForm.addedElements.forEach((res: any, index: number) => {
      let componentRef: any = this.container.createComponent(
        this.formBuilderService.findComponent(res.type)
      );
      componentRef.instance.elementObj = res;
      componentRef.instance.formData = this.customForm;
      componentRef.instance.index = index;
      componentRef.instance.deleteElement.subscribe((res: any) => {
        this.deleteSelectedElement(res);
      });
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

  saveForm() {
    this.formBuilderService.setCustomFormData();
    let savedFormList =
      JSON.parse(localStorage.getItem('savedFormList') as string) || [];
    let ind = savedFormList.findIndex(
      (val: any) => val.id == this.customForm.id
    );
    if (ind < 0) {
      savedFormList.unshift(this.customForm);
      localStorage.setItem('savedFormList', JSON.stringify(savedFormList));
    } else {
      savedFormList.splice(ind, 1, this.customForm);
      localStorage.setItem('savedFormList', JSON.stringify(savedFormList));
    }
    this.formBuilderService.isPropertyPanelOpenSetter(null);
    Swal.fire({ text: 'Form Saved Successfully', confirmButtonText: 'Ok' });
  }

  deleteSelectedElement(obj: any) {
    this.customForm.addedElements.splice(obj.index, 1);
    this.formBuilderService.isPropertyPanelOpenSetter(null);
    this.formBuilderService.setCustomFormData();
    this.initializeView();
  }
}
