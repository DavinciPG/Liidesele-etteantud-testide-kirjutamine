interface Adder{
    add(nr: number):void;
    getSum():number;
}

class CharCounter {
    constructor(protected adder: Adder) {}

    addWordCharacters(word: string): void {
        this.adder.add(word.length);
    }

    getCharacterCount(): number {
        return this.adder.getSum();
    }

    // New method to calculate the sum of lengths of words in an array
    addWordsCharacters(words: string[]): void {
        for (const word of words) {
            this.addWordCharacters(word);
        }
    }
}

class SimpleAdder implements Adder{
    protected sum:number=0;
    add(nr:number){this.sum+=nr;}
    getSum(): number {
        return this.sum;
    }
}

let adder1:Adder=new SimpleAdder();
let counter1:CharCounter=new CharCounter(adder1);

const words = ["Juku", "tuli", "kooli"];
counter1.addWordsCharacters(words);

console.log(counter1.getCharacterCount());