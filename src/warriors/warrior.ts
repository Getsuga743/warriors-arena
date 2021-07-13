// Se viene la pelea de gladiadores !!!:
// Existen cuatro tipos de luchadores, los guerreros, los asesinos, los magos y los curanderos. 

import { Battle } from "../game";

// Los guerreros, fuertes tanques  con mucha vida, daño intermedio y poca stamina .
// Los asesinos !, agiles luchadores con  poca vida  gran daño y mucha stamina.
// Los sabios magos, de poca vida, gran daño y poca mana.
// Y los curanderos, de poca vida, poco daño y poca mana.

// Los guerreros aplican un bonus de defensa a sus cualidades de vida.
// Los asesinos aplican veneno en sus ataques !! potenciando su daño.
// Los magos pueden hacer daño, con sus grandes bolas de fuego !! y pueden curarse pero en poca medida.
// Los curanderos pueden curar en grandes proporciones pero tienen muy poco daño.

// Estos luchadores utilizan stamina y mana para realizar sus ataques según el tipo de luchador que sean, 
// sin recursos NO hay ataques !!
// A cada ataque se le descontará la defensa del que lo recibe y eso influirá sus puntos de vida.

// Deben realizar un simulador de peleas ! donde tendrán listas de personajes, cada uno de un tipo
// y cualidades diferentes, y de manera random estos atacaran o utilizaran habilidades para decidir un ganador ! ."
export interface Warrior{
    name:string;
    hp:number;
    attack:number;
    
    
    getHp():number;
    setHp(hp:number):void;

    getAttack():number;
    setAttack(attack:number):void;

    getName():string;
    setName(name:string):void;

    infringeAttack(target :Warrior):void;
    recieveAttack(warrior:Warrior):void;
}

export class Warrior implements Warrior {
    name:string;
    hp:number;
    attack:number;
    
    constructor(name:string,hp:number,attack:number){
        this.hp = hp;
        this.attack = attack;
        this.name = name;
    }
    getHp():number{
        return this.hp;
    }
    setHp(hp:number){
        if(hp < 0){
            this.setHp(0);
            console.log(`${this.getName()} is dead`);
        }else{
            const hpResultant = this.hp - hp;
            const msg = hpResultant < 0 ? `Hp of ${this.getName()} has up to ${this.getHp()}` : `Hp of ${this.getName()} has down to ${this.getHp()}`
            this.hp = hp;
            console.log(msg);
        }
    }
    getAttack():number{
        return this.attack;
    }
    setAttack(attack:number){
        this.attack = attack;
    }

    getName():string{
        return this.name;
    }
    setName(name:string):void{
        this.name = name;
    }

    infringeAttack(target:Warrior):void{
        console.log(`${this.getName()} is attacking to ${target.getName()}!`)
        const hpResultant = target.getHp() - this.getAttack();
        target.setHp(hpResultant);
    }
    recieveAttack(warrior:Warrior):void{
        this.setHp(this.getHp()- warrior.getAttack());
    }
}
class AttackDamageUser extends Warrior {
    stamina:number;
    constructor(name:string,hp:number,attack:number,stamina:number){
        super(name,hp,attack)
        this.stamina = stamina;
    }

    getStamina():number{
        return this.stamina;
    }
    setStamina(stamina:number):void{
        this.stamina = stamina <= 0 ? 0 : stamina;
        if(this.stamina === 0){
            console.log(`${this.getName()} doesn't have enough stamina`);
        }
    }
    infringeAttack(target:Warrior):void {
        const resultantStamina = this.getStamina() - (this.getAttack() / 2);
        if(resultantStamina > 0) {
            super.infringeAttack(target);
            this.setStamina(resultantStamina);
        }
        
    }
}

class MagicAttackUser extends Warrior {
    mana:number;
    constructor(name:string,hp:number,attack:number,mana:number){
        super(name,hp,attack);
        this.mana = mana;
    }
    heal(quantity:number){
        super.setHp(super.getHp()+quantity)
    }
    getMana():number{
        return this.mana;
    }
    setMana(mana:number){
        this.mana = mana  <= 0  ? 0 : mana;
        if(this.mana === 0){
            console.log(`${this.getName()} doesn't have enough mana`);
        }
    }
    infringeAttack(target:Warrior):void{
        const resultantMana = this.getMana() - this.getAttack();
        if(resultantMana >= 0){
            super.infringeAttack(target);
            this.setMana(resultantMana);
        }
    }
}


class Fighter extends AttackDamageUser{
    defenseBonus:number;
    constructor(name:string,hp:number,attack:number,stamina:number,defenseBonus:number){
        super(name,hp,attack,stamina);
        this.defenseBonus = defenseBonus;
    }
    getDefense():number{
        return this.defenseBonus;
    }
    setDefense(defenseBonus:number){
        this.defenseBonus = defenseBonus;
    }
    getHp():number{
        return super.getHp() + this.defenseBonus;
    }
}

class Rogue extends AttackDamageUser {
    poisonBonus:number;
    constructor(name:string,hp:number,attack:number,stamina:number,poisonBonus:number){
        super(name,hp,attack,stamina)
        this.poisonBonus = poisonBonus;
    }
    getAttack():number{
        return super.getAttack() + this.poisonBonus;
    }
}

class Mage extends MagicAttackUser {
    fireBallDamage:number
    constructor(name:string,hp:number,attack:number,mana:number,fireBallDamage:number){
        super(name,hp,attack,mana)
        this.fireBallDamage = fireBallDamage;
    }
    getAttack():number{
        return super.getAttack() + this.fireBallDamage;
    }
    heal(quantity:number){
        super.heal(quantity);
    }

}

class Healer extends MagicAttackUser {
    constructor(name:string,hp:number,attack:number,mana:number){
        super(name,hp,attack,mana);
    }
    heal(quantity:number){
        console.log(super.getName(), 'is healing himself')
        super.heal(quantity * 2);
    }
}

const w1 = new Mage('Mambruk',500,120,700,50);
const w2 = new Fighter('Kar',700,70,700,50);

const battle = new Battle([w1,w2])
battle.battleLoop();