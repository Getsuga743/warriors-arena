import { MessagesPublisher } from './ui/MessagesObserver';
import { timer } from './utils/timer';
import {Warrior} from './warriors/warrior';
export class Battle{
    warriors:Warrior[] = [];
    battleTurn:number;
    constructor(warriors:Warrior[]) {
        this.warriors = warriors;
        this.battleTurn = 0;
    }
    getWinner(warrior1:Warrior,warrior2:Warrior):Warrior {
        return warrior1.getHp() > 0 ? warrior1 : warrior2;
    }
    battleEvent(w1:Warrior,w2:Warrior){
        // w1.infringeAttack(w2);
        // let messageToPublish = commentsFactory.generateBattleComment(w1,w2);
        // MessagesPublisher.addMessage(messageToPublish);

    }
    async battle(w1:Warrior,w2:Warrior){
        while((w1.getHp() >= 1 && w2.getHp() >= 1)){
            if(this.battleTurn % 2 === 0){
                w1.infringeAttack(w2);
            }else{
                w2.infringeAttack(w1);
            }
            this.battleTurn ++;
            await timer(1500);
        }
        console.log(this.getWinner(w1,w2).getName());
    }
    battleLoop(){
        let first:number;
        let notFirst:number;

        if(0.5 > Math.random()){
            first = 0;
            notFirst = 1
        }else{
            first = 1;
            notFirst = 0;
        }
        const warrior1:Warrior = this.warriors[first];
        const warrior2:Warrior = this.warriors[notFirst];
        this.battle(warrior1,warrior2);

        // while((warrior1.getHp() >= 1 && warrior2.getHp() >= 1)){
        //     if(this.battleTurn % 2 === 0){
        //         this.warriors[first].infringeAttack(this.warriors[notFirst]);
        //     }else{
        //         this.warriors[notFirst].infringeAttack(this.warriors[first]);
        //     }
        //     this.battleTurn ++;
        // }
        const winner = this.getWinner(warrior1,warrior2);
        return winner;
    }
}

export class Arena {
    warriors:Warrior[]= [];
    warriorsLeft:Warrior[]=[];
    round:number;
    constructor(warriors:Warrior[]){
        this.warriors = warriors;
        this.warriorsLeft = warriors;
        this.round = 0;
    }
    getWarriors():Warrior[]{
        return this.warriors;
    }

    filterWinner(warriors:Warrior[],names:string[]){
        this.warriorsLeft = warriors.filter(w => {return  names.some((n) => n === w.name)});
    }
    splitWarriors(warriors:Warrior[]){
        const half = Math.floor(warriors.length / 2);
        const firstHalf =  warriors.slice(0, half);
        const secondHalf = warriors.slice(half);
        return [firstHalf,secondHalf];
    }
    arenaLoop(){
        const winners:Warrior[]=[]
        const [firstGroup,secondGroup] = this.splitWarriors(this.warriors);
        console.log((firstGroup),secondGroup)
        while(firstGroup.length === secondGroup.length){
            const battle = new Battle([firstGroup[this.round],secondGroup[this.round]]);
            const winner = battle.battleLoop();
            winners.push(winner);
            this.filterWinner([...firstGroup,...secondGroup],winners.map(w => w.name));
            this.warriorsLeft.forEach(x => console.log(x.name))
            this.round++;
        }
        console.log(winners);
    }
}
