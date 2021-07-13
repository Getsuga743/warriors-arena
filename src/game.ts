import {Warrior} from './warriors/warrior';
export class Battle{
    warriors:Warrior[] = [];
    battleTurn:number;
    constructor(warriors:Warrior[]) {
        this.warriors = warriors;
        this.battleTurn = 0;
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
        const [warrior1,warrior2] = this.warriors;
        // warrior1.getHp() >= 0 || warrior2.getHp() >= 0
        // this.warriors[0].getHp() >= 0 && this.warriors[1].getHp() >= 0
        while(this.battleTurn <= 15){
            
            if(this.battleTurn % 2 === 0){
                console.log(this.warriors[notFirst].getName())
                this.warriors[first].infringeAttack(this.warriors[notFirst]);
            }else{
                console.log(this.warriors[first].getName())
                this.warriors[notFirst].infringeAttack(this.warriors[first]);
            }
            this.battleTurn ++;
            if((this.warriors[0].getHp() <= 0 && this.warriors[1].getHp() <= 0)) console.log('se murio');
        }
        console.log(warrior1.getHp());
        console.log(warrior2.getHp());
    }
}
