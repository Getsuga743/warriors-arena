
import { Battle } from '../battle/Battle';
import {Warrior} from '../warriors/warrior';
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
        this.warriorsLeft = warriors.filter(w => {return  names.some((n) => n === w.getName())});
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
            this.filterWinner([...firstGroup,...secondGroup],winners.map(w => w.getName()));
            this.warriorsLeft.forEach(x => console.log(x.getName()))
            this.round++;
        }
        console.log(winners);
    }
}
