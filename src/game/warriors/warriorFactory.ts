import { Warrior,Fighter,Rogue,Mage,Healer} from "./warrior";


export type WIdentifier = 'fighter' | 'rogue' | 'mage' | 'healer';

export class WarriorFactory {
    
    create(identifier:WIdentifier,data:{name:string,hp:number,attack:number,energy:number,special?:number}){
        const {name,hp,attack,energy,special=0} = data;
        if(identifier && data){
        let warrior:Warrior;
        switch (identifier) {
            case 'fighter':
                warrior  = new Fighter(name,hp,attack,energy,special);
                break;
            case 'rogue':
                warrior  = new Rogue(name,hp,attack,energy,special);
                break;
            case 'mage':
                warrior  = new Mage(name,hp,attack,energy,special);
                break;
            case 'healer':
                warrior = new Healer(name,hp,attack,energy);
                break;
            default:
                throw new Error('wrong indentifier');
            }
            if(warrior) return warrior;
        }
        return null;
    };
}