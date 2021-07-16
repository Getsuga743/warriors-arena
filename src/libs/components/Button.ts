import {InlineStyledComponent,InlineStyles} from './Component';

export default class Button extends InlineStyledComponent {
    readonly element: HTMLButtonElement;
    public onClick: () => void = () => {
        throw new Error('Click handler not defined in button');
    };
    constructor (text: string,className?:string,styles?:InlineStyles) {
    super();
    this.element = document.createElement('button');
    this.element.textContent = text;
    this.applyStyles(styles,className);
    this.element.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        this.onClick();
    });
};
}