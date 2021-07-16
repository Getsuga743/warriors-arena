import {Container} from './Containers/Containers';


export interface TextLogger{
    loggerContainer:Container;
    portraitContainer:Container;
    textContainer:Container;
}

export class TextLogger {
    loggerContainer:Container;
    portraitContainer:Container;
    textContainer:Container;
    constructor(loggerContainer:Container,textContainer:Container,portaitContainer:Container){
        this.loggerContainer = loggerContainer;
        this.textContainer = textContainer;
        this.portraitContainer = portaitContainer;
        this.loggerContainer.content.appendChild(this.portraitContainer.content);
        this.loggerContainer.content.appendChild(this.textContainer.content);
    }
}
