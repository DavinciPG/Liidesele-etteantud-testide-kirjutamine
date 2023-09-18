import {Adder, SimpleAdder} from "../index";

test('test1', () => {
    let adder:Adder=new SimpleAdder();
    expect(adder.getSum()).toBe(0);
    adder.add(3);
    expect(adder.getSum()).toBe(3);
    adder.add(5);
    expect(adder.getSum()).toBe(8);
});