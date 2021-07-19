// import './styles/styles.css';
// import {UILogger } from './ui/components/UILogger';
// import { Message } from './ui/components/Message';
// import { MessagesPublisher } from './ui/MessagesObserver';
import {Game} from './engine/Game';
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

app.appendChild(AppContainer);
