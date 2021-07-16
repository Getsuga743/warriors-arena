// import './styles/styles.css';
// import {UILogger } from './ui/components/UILogger';
// import { Message } from './ui/components/Message';
// import { MessagesPublisher } from './ui/MessagesObserver';
import {Game} from './gamemain';
import Button from './libs/components/Button';
import Stack from './libs/components/Stack';
const app = document.querySelector<HTMLDivElement>('#app')!


const AppContainer = document.createElement('div');

const button1 = new Button('Click',undefined,{'color':'red'});
const button2 = new Button('Click 2',undefined,{'color':'blue'});

const stack = new Stack([button1,button2],undefined,{'background-color':'red'});


function renderApp() {
    if (AppContainer !== null) {
        AppContainer.innerHTML = ''
        stack.render(AppContainer);
    }
}
renderApp();






const game = new Game(AppContainer);

game.load();
game.run();


// const gameScreen = document.createElement('div');
// const textOutput = document.createElement('div');

// const loggerInstance = new UILogger(textOutput);



// const messagesPublisher = new MessagesPublisher();

// messagesPublisher.subscribe(loggerInstance);

// messagesPublisher.addMessage(new Message({id:1,name:'man',content:'test'}));
// messagesPublisher.addMessage(new Message({id:2,name:'man',content:'test'}));
// messagesPublisher.addMessage(new Message({id:3,name:'man',content:'test'}));

// loggerInstance.updateLogs();



// AppContainer.className = 'container';
// gameScreen.className = 'container__gameScreen';



// AppContainer.appendChild(gameScreen);
// AppContainer.appendChild(textOutput);
app.appendChild(AppContainer);
