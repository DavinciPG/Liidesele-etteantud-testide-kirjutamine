import {Adder, SimpleAdder} from "../index";

test('test2', () => {
    let adder:Adder=new SimpleAdder();
    adder.add(30);
    adder.add(20);
    adder.add(20);
    expect(adder.getSum()).toBe(70);
});