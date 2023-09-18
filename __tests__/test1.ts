import {Adder, SimpleAdder} from "../index";

let adder: Adder;

beforeEach(() => {
    adder=new SimpleAdder();
})

test('start', () => {
    expect(adder.getSum()).toBe(0);
});

test('one value', () => {
    adder.add(3);
    expect(adder.getSum()).toBe(3);
});

test('two values', () => {
    adder.add(3);
    adder.add(5);
    expect(adder.getSum()).toBe(8);
});

test('after zeroing functions correctly', () => {
   adder.add(6);
   adder.zero();
   adder.add(6);
   expect(adder.getSum()).toBe(6);
});