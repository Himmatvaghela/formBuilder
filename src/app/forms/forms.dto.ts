// export interface Form {
//   id?: number | string;
//   userId: number | string;
//   name: string;
//   productName: string;
//   description: string;
//   tag?: string[];
//   frame: { width: number; height: number };
//   frameProperty: Frame;
//   responsive: boolean;
//   elementId: string;
//   addedElements: any[];
//   onlyRender: boolean;
// }

let Frame = {
  background_color: '#ffffff',
};

export const fontFamilies = [
  { name: 'Lato', googleName: 'Lato' },
  { name: 'Roboto Mono', googleName: 'Roboto Mono' },
];

let Format = {
  case_type: 'upper_case',
  // text_type: "normal_text",
  fontStyle: 'normal',
  font_family: 'Lato',
  font_size: 12,
  isBold: false,
  isItalic: false,
  isUnderline: false,
  strikethrough: false,
  horizontal_align: '',
  vertical_align: 'middle',
  text_color: '#000000',
  text_outline: 'transparent',
  text_align: 'left',
};

let buttonFormat = {
  style: 'primary',
  width: '150',
  height: '30',
  align: 'center',
  border_color: '#9B60C6',
  font_family: 'Lato',
  font_size: 12,
  background_color: '#9B60C6',
  horizontal_align: '',
  vertical_align: 'middle',
  text_color: '#ffffff',
  text_outline: 'transparent',
  text_align: 'center',
};
let dividerFormat = {
  style: 'regular',
  number_of_lines: 1,
  vertical_align: 'middle',
  text_color: '#000',
};

let Container = {
  background_color: '#FFFFFF',
  border_color: '#c7c7c7',
  border_radius: 4,
  rows: 1,
  columns: 1,
  padding: {
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
  },
  margin: {
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
  },
  //columns: 1, // if type == section
  //rows: 1, // if type == section
};
let buttonContainer = {
  width: '',
  height: '',
  border_radius: 0,
  padding: {
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
  },
  margin: {
    bottom: '0',
    left: '0',
    right: '0',
    top: '0',
  },
};

let text = {
  elementId: '',
  referenceId: '',
  classes: {},
  type: 'text',
  value: '',
  default_view: 'visible',
  reset_view: 'visible',
  format: Format,
  container: { width: 100, height: 30, ...Container },
};

let input = {
  referenceId: '',
  elementId: '',
  classes: {},
  value: '',
  dummyValue: '',
  format: Format,
  container: Container,
  type: 'input',
  fieldType: 'Text Field', // text , number , password .
  placeholder: '',
  mandatory: true, //boolean { true or false}),
  data_format: '', // DataFormat Class
  error_check: 'none', //(not require currently)
  default_value_source: '', // static value , bring via api , bring value via code
  static_value: '', // if default_value = static value
  isEnableForApi: false,
  outputParameters: {},
  integration: '', // if default_value = bring via api
  select_api: '', // if default_value = bring via api
  //api_input: "", // if default_value = bring via api

  syntax: '', // if default_value = bring value via code
  code: '', // if default_value = bring value via code

  allow_editing: true, // Boolean
  mask_value: false, // Boolean
  widget: '', //(not require currently)
  default_view: 'visible',
  reset_view: 'visible',
  conditions: '', //(not require currently)
  isValid: false,
  isJSONValid: false,
  key: '',
};

let ip_address: any = {
  referenceId: '',
  elementId: '',
  classes: {},
  value: '',
  dummyValue: '',
  fieldType: 'IP Address',
  format: Format,
  container: {
    background_color: '#FFFFFF',
    border_color: '#c7c7c7',
    border_radius: 4,
    rows: 1,
    columns: 1,
    padding: {
      left: '5',
      right: '5',
      top: '4',
      bottom: '4',
    },
  },
  type: 'ip_address',
  mode: 'ipv4',
  placeholder: '',
  mandatory: true, //boolean { true or false}),
  error_check: 'none', //(not require currently)
  default_value_source: '', // static value , bring via api , bring value via code
  static_value: '', // if default_value = static value
  integration: '', // if default_value = bring via api
  select_api: '', // if default_value = bring via api
  syntax: '', // if default_value = bring value via code
  code: '', // if default_value = bring value via code
  allow_editing: true, // Boolean
  mask_value: false, // Boolean
  widget: 'None', //(not require currently)
  default_view: 'visible',
  reset_view: 'visible',
  conditions: ' ', //(not require currently)
  isJSONValid: false,
  portions: 4,
  maxLength: 3,
  isValid: false,
  valueArr: [],
  subNetMask: '',
  dummyValueArr: [],
  dummySubNetMask: '',
  isEnableForApi: false,
  outputParameters: {},
  key: '',
};

let input_number = {
  elementId: '',
  referenceId: '',
  classes: {},
  value: '',
  dummyValue: '',
  format: Format,
  container: Container,
  type: 'input_number',
  fieldType: 'Number', // text , number , password .
  placeholder: '',
  mandatory: true, //boolean { true or false}),
  data_format: 'Numeric', // DataFormat Class
  error_check: 'none', //(not require currently)
  default_value_source: '', // static value , bring via api , bring value via code
  static_value: '', // if default_value = static value
  integration: '', // if default_value = bring via api
  select_api: '', // if default_value = bring via api
  syntax: '', // if default_value = bring value via code
  code: '', // if default_value = bring value via code
  allow_editing: true, // Boolean
  mask_value: false, // Boolean
  widget: 'None', //(not require currently)
  default_view: 'visible',
  reset_view: 'visible',
  conditions: ' ', //(not require currently)
  isJSONValid: false,
  isEnableForApi: false,
  outputParameters: {},
  key: '',
};

let singleSelectDropdown: any = {
  referenceId: '',
  elementId: '',
  placeholder: 'select',
  classes: {},
  type: 'single_select',
  format: Format,
  container: Container,
  mandatory: true,
  selectSettings: { idField: 'id', textField: 'name' },
  option_value_source: '', // static value , bring via api , bring value via code
  optionForm: {
    static_options: '',
    api: '',
    integrations: '',
    syntax: '',
    code: '',
  },
  defaultValueForm: {
    addedOptions: '',
    api: '',
    syntax: '',
    integrations: '',
    code: '',
    key: '',
  },
  // static_options: "", // if default_value = static value

  options_list: [], // options to be store in this key.
  dummySelectedItems: {},
  value: null, // type be String or number.
  dummyValue: null,
  integration: '', // if default_value = bring via api
  select_api: '', // if default_value = bring via api
  //api_input: "", // if default_value = bring via api

  syntax: '', // if default_value = bring value via code
  code: '', // if default_value = bring value via code
  key: '',
  allow_editing: true,
  error_check: 'none', //(not require currently)
  default_value: 'none',
  display_value: '',
  widget: [],
  maskValue: false, // (not require currently)
  default_view: 'visible',
  reset_view: 'visible',
  isJSONValid: false,
  isEnableForApi: false,
  outputParameters: {},
};

let multiSelectDropdown: any = {
  referenceId: '',
  elementId: '',
  classes: {},
  type: 'multi_select',
  format: Format,
  container: Container,
  mandatory: true,
  option_value_source: '', // static value , bring via api , bring value via code
  static_options: '', // if default_value = static value
  error_check: 'none',
  options_list: [], // options to be store in this key.
  value: [], // type be String or number.
  dummyValue: [],
  dummyOption_list: [],
  dummySelectedItems: [],
  integration: '', // if default_value = bring via api
  select_api: '', // if default_value = bring via api
  //api_input: "", // if default_value = bring via api
  syntax: '', // if default_value = bring value via code
  code: '', // if default_value = bring value via code
  allowEditing: 'Yes',
  default_value: 'none',
  placeholder: '',
  widget: [],
  outputParameters: {},
  key: '',
  maskValue: false, // (not require currently)
  default_view: 'visible',
  reset_view: 'visible', // visible by default or hidden by default
  display_value: '',
  isJSONValid: false,
  isEnableForApi: false,
};

let section: any = {
  groupId: '',
  referenceId: '',
  classes: {},
  type: 'section',
  default_view: 'visible',
  reset_view: 'visible', // visible by default or hidden by default
  container: {
    background_color: '#F4F8FE',
    border_color: '#FFFFFF',
    border_radius: '0',
    rows: 1,
    columns: 1,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
  },
  addedElements: [],
};
let repeatable_section: any = {
  groupId: '',
  referenceId: '',
  classes: {},
  type: 'repeatable_section',
  default_view: 'visible',
  reset_view: 'visible', // visible by default or hidden by default
  container: {
    background_color: '#F4F8FE',
    border_color: '#FFFFFF',
    border_radius: '0',
    rows: 1,
    columns: 1,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
  },
  is_repeatable: true,
  key: '',
  value: [],
  addedElements: [],
};
let divider = {
  elementId: '',
  referenceId: '',
  type: 'divider',
  classes: {},
  default_view: 'visible',
  reset_view: 'visible', // visible by default or hidden by default
  format: dividerFormat,
  container: Container,
};

let button = {
  elementId: '',
  referenceId: '',
  parentId: '',
  type: 'button',
  text: '',
  event: '',
  classes: {},
  container: buttonContainer,
  format: buttonFormat,
  action: {
    location: '',
    url: '',
    eventName: '',
    actionType: 'post_to_url',
    code: '',
    syntax: 'json',
  },
  condition: '',
  isEnableForApi: false,
  outputParameters: {},
  default_view: 'Visible-Active',
};

let hypertext = {
  elementId: '',
  referenceId: '',
  parentId: '',
  classes: {},
  type: 'hypertext',
  text: '',
  default_view: 'visible',
  reset_view: 'visible',
  action: {
    dependent_element: '',
    url: '',
    actionType: 'add_item', //Add item,Redirect to URL,Remove
  },
  format: Format,
  container: Container,
};

let radioButton = {
  elementId: '',
  mandatory: true,
  referenceId: '',
  container: Container,
  format: Format,
  classes: {},
  type: 'radio_button',
  widget: 'none',
  error_check: 'none',
  defaultValue: {
    api: '',
    syntax: '',
    code: '',
    defaultValue: 'none',
    static_value: '',
    integrations: '',
  },
  optionType: {
    option_value_source: 'create_static_option',
    api: '',
    syntax: '',
    code: '',
    addedOptions: '',
    integrations: '',
  },
  value: '',
  outputParameters: {},
  key: '',
  dummyValue: '',
  dummyOptions: '',
  options: [
    {
      label: 'option',
      isChecked: false,
    },
  ],
  default_view: 'visible',
  reset_view: 'visible', // visible by default or hidden by default
  columns: 1,
  isJSONValid: false,
  isEnableForApi: false,
};

const checkBox: any = {
  mandatory: true,
  elementId: '',
  referenceId: '',
  type: 'checkbox',
  container: Container,
  format: Format,
  dummyValue: [],
  dummyOptions: [],
  error_check: 'none',
  widget: 'none',
  classes: {},
  options: [
    {
      label: 'option',
      isChecked: false,
    },
  ],
  columns: 1,
  defaultValue: {
    api: '',
    syntax: '',
    code: '',
    defaultValue: 'none',
    static_value: '',
    integrations: '',
  },
  optionType: {
    option_value_source: 'create_static_option',
    api: '',
    syntax: '',
    code: '',
    addedOptions: '',
    integrations: '',
  },
  default_view: 'visible',
  reset_view: 'visible', // visible by default or hidden by default
  isJSONValid: false,
  isEnableForApi: false,
  outputParameters: {},
  key: '',
};

const toggle: any = {
  mandatory: true,
  elementId: '',
  referenceId: '',
  type: 'toggle',
  container: Container,
  format: Format,
  dummyValue: [],
  error_check: 'none',
  widget: 'none',
  classes: {},
  defaultValue: 'No',
  default_view: 'visible', // visible by default or hidden by default
  reset_view: 'visible',
  isJSONValid: false,
  isEnableForApi: false,
  outputParameters: {},
  key: '',
  return_type: 'string',
};

let accordion = {
  key: '',
  value: {},
  groupId: '',
  referenceId: '',
  type: 'accordion',
  name: 'Untitled Accordion',
  expanded: true,
  default_view: 'visible', // visible by default or hidden by default
  reset_view: 'visible',
  container: Container,
  format: Format,
  addedElements: [section],
};

export const tab = {
  type: 'tab',
  key: '',
  value: {},
  elementId: '',
  referenceId: '',
  format: Format,
  container: Container,
  classes: {},
  tabs: [
    {
      label: 'Untitled',
      frame: Frame,
      container: Container,
      isSelected: false,
      isInEditableMode: false,
      addedElements: [section],
    },
  ],
  default_view: 'visible',
  reset_view: 'visible', // visible by default or hidden by default
};
export const table: any = {
  type: 'table',
  key: '',
  value: [],
  elementId: '',
  referenceId: '',
  format: Format,
  container: Container,
  classes: {},
  headers: [],
  default_view: 'visible',
  reset_view: 'visible', // visible by default or hidden by default
};

export let rowContainer: any = {
  type: 'row',
  format: {
    vertical: 'middle',
    horizontal: 'left',
    direction: 'row',
  },
  container: {
    width: 800,
    height: 50,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#e4effa',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  addedElements: [],
  default_view: 'visible',
};

export let repeatableContainer: any = {
  type: 'nf_repeatable_container',
  format: {
    vertical: 'middle',
    horizontal: 'left',
    direction: 'row',
  },
  container: {
    width: 800,
    height: 150,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#e4effa',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  addedElements: [rowContainer],
  default_view: 'visible',
  is_repeatable: true,
};

export let column: any = {
  type: 'column',
  format: {
    vertical: 'top',
    horizontal: 'left',
    direction: 'row',
  },
  container: {
    width: 350,
    height: 30,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#f0f0f0',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  addedElements: [],
  default_view: 'visible',
};

export let image: any = {
  type: 'image',
  format: {
    vertical: 'top',
    horizontal: 'left',
    direction: 'row',
  },
  container: {
    width: 200,
    height: 200,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#f0f0f0',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
};

export let icon: any = {
  type: 'icon',
  format: {
    vertical: 'top',
    horizontal: 'left',
    direction: 'row',
    color: '#000000',
  },
  container: {
    width: 16,
    height: 16,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#ffffff',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  icon: 'x',
  icon_type: 'feather_icon',
  default_view: 'visible',
  hover_effect: false,
};
export let nf_single_select: any = {
  type: 'nf_single_select',
  format: Format,
  container: {
    width: 300,
    height: 35,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#ffffff',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  //property
  error_check: 'none',
  widget: 'none',
  tooltip_text: '',
  enableForApi: false,
  conditions: [],
  text_info: '',
  default_value: 'none',
  isConditionEnable: false,
  disable_dynamically: false,
  option_value: '',
  reset_editing: true,
  allow_editing: true,
  options_list: [],
  key: '',
  searchEnable: false,
  placeholder: 'Select',
  mandatory: true,
  default_view: 'visible',
  reset_view: 'visible',
  key_value: 'id',
  display_value: 'name',
  enable_interaction: false,
  label_distribution: 5,
};
export let nf_multi_select: any = {
  type: 'nf_multi_select',
  format: Format,
  container: {
    width: 300,
    height: 35,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#ffffff',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  error_check: 'none',
  widget: 'none',
  enableForApi: false,
  conditions: [],
  text_info: '',
  default_value: 'none',
  isConditionEnable: false,
  disable_dynamically: false,
  option_value: '',
  reset_editing: true,
  allow_editing: true,
  selectSettings: {
    idField: 'id',
    textField: 'name',
  },
  options_list: [],
  key: '',
  searchEnable: false,
  placeholder: 'Select',
  mandatory: true,
  default_view: 'visible',
  reset_view: 'visible',
  label_distribution: 5,
};
export let nf_input_text: any = {
  type: 'nf_input_text',
  placeholder: 'Enter Text',
  field_type: 'Text',
  allow_editing: true,
  format: Format,
  container: {
    width: 300,
    height: 35,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#ffffff',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  widget: [],
  tooltip_text: '',
  mandatory: true,
  default_view: 'visible',
  reset_view: 'visible',
  label_distribution: 5,
};

export let nf_bandwidth: any = {
  type: 'nf_bandwidth',
  format: Format,
  container: {
    width: 300,
    height: 35,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#ffffff',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  //property
  allow_editing: true,
  key: '',
  value: null,
  unit: 'Kbps',
  enableForApi: false,
  placeholder: 'Enter Bandwidth',
  mandatory: true,
  default_view: 'visible',
  reset_view: 'visible',
  enable_interaction: false,
  widget: [],
  tooltip_text: '',
  label_distribution: 5,
};

let nf_ip_address: any = {
  referenceId: '',
  elementId: '',
  classes: {},
  value: '',
  dummyValue: '',
  fieldType: 'IP Address',
  format: Format,
  container: {
    width: 300,
    height: 35,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#ffffff',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  type: 'nf_ip_address',
  ip_type: 'ipv4',
  mode: 'without mask',
  mandatory: true, //boolean { true or false}),
  error_check: 'none', //(not require currently)
  default_value_source: '', // static value , bring via api , bring value via code
  static_value: '', // if default_value = static value
  integration: '', // if default_value = bring via api
  select_api: '', // if default_value = bring via api
  syntax: '', // if default_value = bring value via code
  code: '', // if default_value = bring value via code
  allow_editing: true, // Boolean
  default_view: 'visible',
  reset_view: 'visible',
  conditions: ' ', //(not require currently)
  isJSONValid: false,
  portions: 4,
  maxLength: 3,
  isValid: false,
  valueArr: [],
  subNetMask: '',
  dummyValueArr: [],
  dummySubNetMask: '',
  isEnableForApi: false,
  outputParameters: {},
  key: '',
  enable_interaction: false,
  widget: [],
  tooltip_text: '',
  label_distribution: 5,
};

let nf_ip_address_dropdown: any = {
  referenceId: '',
  elementId: '',
  classes: {},
  value: '',
  dummyValue: '',
  fieldType: 'IP Address Dropdown',
  format: Format,
  container: {
    width: 300,
    height: 35,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#ffffff',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  type: 'nf_ip_address_dropdown',
  ip_type: 'ipv4',
  mandatory: true, //boolean { true or false}),
  error_check: 'none', //(not require currently)
  default_value_source: '', // static value , bring via api , bring value via code
  static_value: '', // if default_value = static value
  integration: '', // if default_value = bring via api
  select_api: '', // if default_value = bring via api
  syntax: '', // if default_value = bring value via code
  code: '', // if default_value = bring value via code
  allow_editing: true, // Boolean
  default_view: 'visible',
  reset_view: 'visible',
  conditions: ' ', //(not require currently)
  isJSONValid: false,
  isValid: false,
  valueArr: [],
  subNetMask: '',
  dummyValueArr: [],
  isEnableForApi: false,
  outputParameters: {},
  key: '',
  enable_interaction: false,
  widget: [],
  tooltip_text: '',

  enableForApi: false,
  text_info: '',
  default_value: 'none',
  isConditionEnable: false,
  disable_dynamically: false,
  option_value: '',
  reset_editing: true,
  options_list: [],
  searchEnable: false,
  placeholder: 'Select',
  key_value: 'id',
  display_value: 'name',
  label_distribution: 5,
};

export let nf_input_number: any = {
  type: 'nf_input_number',
  format: Format,
  container: {
    width: 300,
    height: 35,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#f0f0f0',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  elementId: '',
  referenceId: '',
  classes: {},
  value: '',
  dummyValue: '',
  fieldType: 'Number', // text , number , password .
  placeholder: 'Enter Number',
  mandatory: true, //boolean { true or false}),
  data_format: 'Numeric', // DataFormat Class
  error_check: false, //(not require currently)
  default_value_source: '', // static value , bring via api , bring value via code
  static_value: '', // if default_value = static value
  integration: '', // if default_value = bring via api
  select_api: '', // if default_value = bring via api
  syntax: '', // if default_value = bring value via code
  code: '', // if default_value = bring value via code
  allow_editing: true, // Boolean
  mask_value: false, // Boolean
  trigger: false,
  default_view: 'visible',
  reset_view: 'visible',
  conditions: ' ', //(not require currently)
  isJSONValid: false,
  isEnableForApi: false,
  outputParameters: {},
  key: '',
  enable_interaction: false,
  widget: 'none',
  tooltip_text: '',
  label_distribution: 5,
};
export let nf_radio: any = {
  type: 'nf_radio',
  format: Format,
  container: {
    width: 300,
    height: 35,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#f0f0f0',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  // property Data
  error_check: 'none',
  widget: 'none',
  tooltip_text: '',
  enableForApi: false,
  conditions: [],
  default_value: 'none',
  isConditionEnable: false,
  disable_dynamically: false,
  option_value: '',
  reset_editing: true,
  allow_editing: true,
  options_list: [{ label: 'label' }],
  key: '',
  placeholder: 'Select',
  mandatory: true,
  default_view: 'visible',
  reset_view: 'visible',
  key_value: 'label',
  display_value: 'label',
  columns: 1,
  enable_interaction: false,
  label_distribution: 5,
};
export let nf_checkbox: any = {
  type: 'nf_checkbox',
  format: Format,
  container: {
    width: 300,
    height: 35,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#f0f0f0',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  // property Data
  error_check: 'none',
  widget: 'none',
  tooltip_text: '',
  enableForApi: false,
  conditions: [],
  default_value: 'none',
  isConditionEnable: false,
  disable_dynamically: false,
  option_value: '',
  reset_editing: true,
  allow_editing: true,
  options_list: [{ label: 'label' }, { label: 'label2' }],
  key: '',
  placeholder: 'Select',
  mandatory: true,
  default_view: 'visible',
  reset_view: 'visible',
  key_value: 'label',
  display_value: 'label',
  columns: 1,
  enable_interaction: false,
  label_distribution: 5,
};
export let nf_label: any = {
  type: 'nf_label',
  format: Format,
  container: {
    width: 300,
    height: 35,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#f0f0f0',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  widget: 'none',
  tooltip_text: '',
  default_view: 'visible',
};
export let nf_button: any = {
  type: 'nf_button',
  format: buttonFormat,
  container: {
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#f0f0f0',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  default_view: 'visible_active',
  action: { actionType: 'post_to_url' },
};

export let nf_text_area: any = {
  type: 'nf_text_area',
  format: Format,
  container: {
    width: 300,
    height: 80,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#ffffff',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  field_type: 'Textarea',
  placeholder: 'Enter Text',
  allow_editing: true,
  widget: 'none',
  tooltip_text: '',
  mandatory: true,
  default_view: 'visible',
  label_distribution: 5,
};

export let nf_hypertext: any = {
  elementId: '',
  referenceId: '',
  parentId: '',
  classes: {},
  type: 'nf_hypertext',
  text: '',
  default_view: 'visible',
  reset_view: 'visible',
  container: {
    width: 100,
    height: 30,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#f0f0f0',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  action: '',
  // action: {
  //   dependent_element: "",
  //   url: "",
  //   actionType: "add_item", //Add item,Redirect to URL,Remove
  // },
  format: Format,
};

export let nf_toggle: any = {
  type: 'nf_toggle',
  format: Format,
  container: {
    width: 200,
    height: 20,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#f0f0f0',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  allow_editing: true,
  key: '',
  value: '',
  default_value: '',
  mandatory: true,
  default_view: 'visible',
  reset_view: 'visible',
  widget: [],
  label_distribution: 5,
};

export let nf_file_upload: any = {
  type: 'nf_file_upload',
  placeholder: 'Enter Text',
  field_type: 'file',
  allow_editing: true,
  format: Format,
  container: {
    width: 300,
    height: 35,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#ffffff',
    border_color: '#878787',
    border_radius: 4,
  },
  widget: [],
  tooltip_text: '',
  mandatory: true,
  default_view: 'visible',
  reset_view: 'visible',
  file_format: 'base64',
  label_distribution: 5,
};
export let nf_date: any = {
  type: 'nf_date',
  placeholder: 'Enter Text',
  range_placeholder: 'Select Range',
  field_type: 'file',
  allow_editing: true,
  format: Format,
  container: {
    width: 300,
    height: 35,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#ffffff',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  widget: [],
  tooltip_text: '',
  mandatory: true,
  default_view: 'visible',
  reset_view: 'visible',
  date_format: 'day month year -',
  isConditionEnable: false,
  range: false,
  label_distribution: 5,
};
export let nf_time: any = {
  type: 'nf_time',
  placeholder: 'HH:MM',
  range_placeholder: 'HH:MM',
  field_type: 'file',
  allow_editing: true,
  format: Format,
  container: {
    width: 300,
    height: 35,
    padding: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    margin: {
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
    },
    background_color: '#ffffff',
    border_color: '#c7c7c7',
    border_radius: 4,
  },
  widget: [],
  tooltip_text: '',
  mandatory: true,
  default_view: 'visible',
  default_value: 'none',
  reset_view: 'visible',
  time_format: 'HH:MM',
  isConditionEnable: false,
  enable_12_hour: false,
  enable_seconds: false,
  triggers: false,
  range: false,
  label_distribution: 5,
};

export let nf_accordion: any = {
  key: '',
  //value: {},
  type: 'nf_accordion',
  name: 'Untitled Accordion',
  expanded: true,
  default_view: 'visible', // visible by default or hidden by default
  reset_view: 'visible',
  enable_interaction: false,
  container: { width: 800, height: 35, ...Container },
  format: Format,
  addedElements: [rowContainer],
};

export let nf_tab = {
  type: 'nf_tab',
  key: '',
  value: {},
  elementId: '',
  referenceId: '',
  format: Format,
  container: { width: 800, height: 35, ...Container },
  tabs: [
    {
      label: 'Untitled',
      //frame: Frame,
      //container: Container,
      isSelected: false,
      isInEditableMode: false,
      addedElements: [rowContainer],
    },
  ],
  enable_interaction: false,
  default_view: 'visible',
  reset_view: 'visible', // visible by default or hidden by default
};

export const GridData = [
  text,
  input,
  input_number,
  singleSelectDropdown,
  multiSelectDropdown,
  section,
  divider,
  button,
  hypertext,
  radioButton,
  checkBox,
  accordion,
  ip_address,
  tab,
  repeatable_section,
  toggle,
  table,
  rowContainer,
  column,
  image,
  icon,
  nf_single_select,
  nf_multi_select,
  nf_button,
  nf_checkbox,
  nf_label,
  nf_radio,
  nf_input_number,
  nf_input_text,
  nf_bandwidth,
  nf_text_area,
  nf_toggle,
  nf_hypertext,
  nf_ip_address,
  nf_ip_address_dropdown,
  nf_file_upload,
  nf_date,
  nf_accordion,
  nf_tab,
  nf_time,
  repeatableContainer,
];

export const formElements = [
  'text',
  'input',
  'input_number',
  'section',
  'single_select',
  'multi_select',
  'radio_button',
  'hypertext',
  'checkbox',
  'divider',
  'button',
  'accordion',
  'repeatable_section',
  'table',
  'toggle',
  'row',
  'nf_repeatable_container',
  'column',
  'image',
  'icon',
  'nf_single_select',
  'nf_multi_select',
  'nf_label',
  'nf_input_text',
  'nf_input_number',
  'nf_checkbox',
  'nf_radio',
  'nf_button',
  'nf_bandwidth',
  'nf_text-area',
  'nf_toggle',
  'nf_hypertext',
  'nf_ip_address',
  'nf_ip_address_dropdown',
  'nf_file_upload',
  'nf_date',
  'nf_accordion',
  'nf_tab',
  'nf_time',
];
