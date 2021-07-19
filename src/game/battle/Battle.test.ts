
import { WarriorFactory } from "../warriors/warriorFactory";
import { Battle } from "./Battle";




describe('tests on Battle class',()=>{
    const factory = new WarriorFactory();
    let [warrior1Data,warrior2Data] = [{name:'test1',hp:0,attack:150,energy:120,special:250},{name:'test2',hp:50,attack:100,energy:100,special:2}];
    let warrior1 = factory.create('fighter',warrior1Data);
    let warrior2 = factory.create('mage',warrior2Data);
    let battle = new Battle([warrior1,warrior2]);
    test('Battle.battleLoop should return a warrior with hp > 0',()=>{
        expect(battle.battleLoop().getHp()).toBeGreaterThan(0);
    });
    test('Battle get winner method should be return one of two warrior, the one with hp > 0',()=>{
        expect(battle.getWinner(warrior1,warrior2).getHp()).toBeGreaterThan(0);
    });
    test('Battle.getBattleTurn should return a number',()=>{
        expect(typeof battle.getBattleTurn()).toBe('number');
    });
    warrior1= factory.create('fighter',{name:'test1',hp:250,attack:150,energy:120,special:250});
    warrior2 = factory.create('fighter',{name:'test2',hp:150,attack:100,energy:120,special:250});
    battle = new Battle([warrior1,warrior2]);
    test('Battle.getBattleTurn should return a number that is not 0',()=>{
        battle.battleLoop();
        expect(battle.getBattleTurn()).toBeGreaterThan(0);
    });
})

