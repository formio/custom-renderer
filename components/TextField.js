import TextFieldComponent from 'formiojs/components/textfield/TextField';
export default class CustomTextFieldComponent extends TextFieldComponent {
  // Override the createLabel method.
  createLabel(container) {
    super.createLabel(container);
    this.addClass(this.labelElement, 'text-success');
  }
}