import { Message } from "./Message";
import {UILogger} from "./UILogger";
export class MessagesPublisher {
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
    addMessage(m:Message){
        console.log('notifcando..')
        console.log(this.susbcribers)
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