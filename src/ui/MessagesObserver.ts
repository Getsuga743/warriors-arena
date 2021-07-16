import { timer } from "../utils/timer";
import { Message } from "./Message";
import {UILogger} from "./components/UILogger";
interface MessagesPublisherInterface{
    susbcribers:UILogger[];
    messages:Message[];
    subscribe(s:UILogger):void;
    unsubscribe(s:UILogger):void;
    notifySubscribers():void;
    addMessage(m:Message):void;
}
export class MessagesPublisher implements MessagesPublisherInterface {
    susbcribers:UILogger[];
    messages:Message[];
    constructor(){
        this.susbcribers=[];
        this.messages=[];
    }
    subscribe(s:UILogger){
        this.susbcribers.push(s);
    }
    unsubscribe(s:UILogger){
        this.susbcribers =  this.susbcribers.filter(el => el !== s)
    }
    notifySubscribers(){
        this.susbcribers.forEach(s => {
            s.subscribeMessages(this.messages);
        })
    }
    async addMessage(m:Message){
        await timer(2000);
        this.messages.push(m);
        this.notifySubscribers();
    }
}

export abstract class MessagesSubscriber{
    messages:Message[];
    constructor(){
        this.messages = [];
    }
    subscribeMessages(s:Message[]){
        this.messages = s;
    }
}