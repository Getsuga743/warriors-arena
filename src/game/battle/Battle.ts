import { timer } from "../../utils/timer";
import { Warrior } from "../warriors/warrior";


export class Battle{
    private warriors:Warrior[] = [];
    private battleTurn:number;
    constructor(warriors:Warrior[]) {
        this.warriors = warriors;
        this.battleTurn = 0;
    }
    getWinner(warrior1:Warrior,warrior2:Warrior):Warrior {
        return warrior1.getHp() > 0 ? warrior1 : warrior2;
    }
    getBattleTurn(){
        return this.battleTurn;
    }
    async attacks(w1:Warrior,w2:Warrior){
        while((w1.getHp() >= 1 && w2.getHp() >= 1)){
            if(this.battleTurn % 2 === 0){
                if(w2.getHp() !== 0) w1.infringeAttack(w2);
            }else{
                if(w1.getHp() !== 0) w1.infringeAttack(w2);
            }
            this.battleTurn ++;
            await timer(1500);
        }
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
        this.attacks(warrior1,warrior2);
        const winner = this.getWinner(warrior1,warrior2);
        return winner;
    }
}
