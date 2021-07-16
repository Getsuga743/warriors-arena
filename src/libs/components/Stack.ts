import {InlineStyledComponent,InlineStyles} from './Component';


export enum childrenType {
    HTMLElement = 1,
    InlineStyledComponent,
}
export type Children = HTMLElement | InlineStyledComponent;

export default class Stack extends InlineStyledComponent {
    readonly element:HTMLDivElement;
    private childrens:Children[];
    private typeOFChildren(children:Children):number{
        if(children instanceof HTMLElement){
            return childrenType.HTMLElement;
        }
        else if(children instanceof InlineStyledComponent){
            return childrenType.InlineStyledComponent;
        }
        else{
            throw new Error('childrens are undefined');
        }
    }

    constructor(childrens?:Children[],className?:string,styles?:InlineStyles){
        super();
        this.element = document.createElement('div'); 
        this.childrens= childrens ? childrens : [];
        this.element.style.display = 'flex';
        this.element.style.flexDirection = 'column';
        this.applyStyles(styles,className);
        if(childrens){
            this.update();
        };
    }
    getElement(){
        return this.element;
    }
    setChildrens(childrens:Children[]){
        this.childrens = childrens;
        this.update();
    }
    getChildrens():Children[]{
        return this.childrens;
    }
    update(){
        const type = this.typeOFChildren(this.childrens[0]);
        if(type === 1){
            this.childrens.forEach(c  => this.element.appendChild(c as HTMLElement));
        };
        if(type === 2){
            this.childrens.forEach((c:Children) => {
                const children = c as InlineStyledComponent;
                children.render(this.element);
            });
        };
    }
}