import { Fighter,Healer,Mage,Rogue } from "./warrior";
import { WarriorFactory} from "./warriorFactory";
describe('test on WarriorFactory',()=>{
    const factory = new WarriorFactory();
    const warriorData = {
        name:'test',
        hp:100,
        attack:150,
        energy:150,
        special:200,
    }
    test('WarriorFactory instance should have a method called create',()=> {
        expect(factory).toHaveProperty('create');
    })
    test('Warrior.create should return a valid Fighter',()=>{
        expect(factory.create('fighter',warriorData)).toBeInstanceOf(Fighter);
    });
    test('Warrior.create should return a valid Rogue',()=>{
        expect(factory.create('rogue',warriorData)).toBeInstanceOf(Rogue);
    });
    test('Warrior.create should return a valid Mage',()=>{
        expect(factory.create('mage',warriorData)).toBeInstanceOf(Mage);
    });
    test('Warrior.create should return a valid Healer',()=>{
        expect(factory.create('healer',warriorData)).toBeInstanceOf(Healer);
    });
})


