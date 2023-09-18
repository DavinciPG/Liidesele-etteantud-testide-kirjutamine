import {Adder, StoringAdder, CharCounter } from "../index";

let charCounter: CharCounter;
let adder: StoringAdder;
beforeEach(() => {
    adder=new StoringAdder();
    charCounter = new CharCounter(adder);
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

test('two values range', () => {
    adder.add(3);
    adder.add(5);
    expect(adder.getRange()).toBe(2);
});

test('zeroing', () => {
   adder.add(3);
   adder.zero();
   expect(adder.getSum()).toBe(0);
});

test('calculate word lengths', () => {
    charCounter.addWordCharacters("apple");
    charCounter.addWordCharacters("banana");
    charCounter.addWordCharacters("cherry");

    expect(adder.getSum()).toBe(17);
});

test('reset CharCounter', () => {
    charCounter.addWordCharacters("apple");
    charCounter.zero();
    charCounter.addWordCharacters("banana");

    expect(adder.getSum()).toBe(6);
});

test('find longest word length', () => {
    charCounter.addWordCharacters("apple");
    charCounter.addWordCharacters("banana");
    charCounter.addWordCharacters("cherry");

    const longestLength = charCounter.getLongestWordLength();

    expect(longestLength).toBe(6);
});