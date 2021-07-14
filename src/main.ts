import './styles/styles.css';
import {UILogger } from './ui/UILogger';
import { Message } from './ui/Message';
import { Portrait } from './ui/Portrait';
import { MessagesPublisher } from './ui/MessagesObserver';

const app = document.querySelector<HTMLDivElement>('#app')!


const AppContainer = document.createElement('div');
const gameScreen = document.createElement('div');
const textOutput = document.createElement('div');

const loggerInstance = new UILogger(textOutput);
loggerInstance.createFullLog();
const portraitCreator = new Portrait();
const port = portraitCreator.createPortrait('favicon.svg','favicon');



const messagesPublisher = new MessagesPublisher();
messagesPublisher.subscribe(loggerInstance);
messagesPublisher.addMessage(new Message({id:1,name:'man',content:'test'}));
messagesPublisher.addMessage(new Message({id:2,name:'man',content:'test'}));
messagesPublisher.addMessage(new Message({id:3,name:'man',content:'test'}));

loggerInstance.updateLogs();

loggerInstance.setPortrait(port);


AppContainer.className = 'container';
gameScreen.className = 'container__gameScreen';



AppContainer.appendChild(gameScreen);
AppContainer.appendChild(textOutput);
app.appendChild(AppContainer);