import {InlineStyledComponent} from "./Component";
import Button from './Button';
import TextInput from "./TextInput";

export default class TextFieldButton extends InlineStyledComponent{
    readonly element:HTMLDivElement;
    private textField:TextInput;
    private button:Button;
    public onInput: (text: string) => void = (text:string) => {
    throw new Error('The handler for the input element on a TextFieldButton has not been defined.')
    }
    public onChange: (text: string) => void = (text:string) => {
    throw new Error('The handler for the change element on a TextFieldButton has not been defined.')
    }
    constructor () {
    super()
    // defines the wrapper
    this.element = document.createElement('div');
    this.element.className = 'text-field-button';
    // defines and setup the text field
    this.textField = new TextInput();
    this.textField.placeholder = 'Enter a text here...';
    this.textField.onInput = (text:string) => {
    this.onInput(text);
    }
    this.textField.onChange = (text:string) => {}
    // defines and setup the button
    this.button = new Button('Submit');
    this.button.onClick = () => {
    this.onChange(this.textField.value);
    }
    }
    get placeholder (): string {
        return this.textField.placeholder;
    }
    set placeholder (text: string) {
        this.textField.placeholder = text;
    }
    get value (): string {
        return this.textField.value;
    }
    set value (value: string) {
        this.textField.value = value;
    }
}