import './styles/styles.css';
import {Logger,Message,Portrait } from './ui/UILogger';


const app = document.querySelector<HTMLDivElement>('#app')!

const container = document.createElement('div');
const gameScreen = document.createElement('div');

const textOutput = document.createElement('div');

const logger = new Logger();

const loggerInstance = logger.createLogger(textOutput,[])

const portraitCreator = new Portrait();

const port = portraitCreator.createPortrait('favicon.svg','favicon');
loggerInstance.createPortraitContainer();
loggerInstance.createTextLog();
loggerInstance.appendMessage(new Message({id:1,name:'Mambruk',content:'Attack!'}).getElement())
loggerInstance.setPortrait(port);

container.className = 'container';
gameScreen.className = 'container__gameScreen';
textOutput.className = 'container__TextOutput';


container.appendChild(gameScreen);
container.appendChild(textOutput);
app.appendChild(container);