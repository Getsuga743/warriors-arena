export interface InlineStyles {
    [key: string]: string;
}


export abstract class Component {
    abstract element:HTMLElement;
    render (parent:HTMLElement | Component):void{
        if(parent instanceof Component){
            parent.element.appendChild(this.element);
        }else {
            parent.appendChild(this.element);
        }
    }
    setClassName(className:string):void{
        if(className !== undefined){
            this.element.className = className;
        }
    }
}

export abstract class  InlineStyledComponent extends Component {
    constructor(){
        super();
    }
    setInlineStyles(attrs: InlineStyles):void{
        if (attrs !== undefined) {
        Object.keys(attrs).forEach((key: string) => {
            this.element.style.setProperty(key, attrs[key]);
        });
    }}
    applyStyles(attrs?:InlineStyles,className?:string){
        if (attrs !== undefined) {
            this.setInlineStyles(attrs)
        };
        if(className !== undefined){
            super.setClassName(className);
        }
    }
}