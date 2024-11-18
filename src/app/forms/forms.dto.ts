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

export const GridData = [rowContainer, nf_input_text];
