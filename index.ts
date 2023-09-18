interface Adder{
    add(nr: number):void;
    getSum():number;
}

class CharCounter{
    constructor(protected adder:Adder){}
    addWordCharacters(word:string):void{
        this.adder.add(word.length);
    }
    getCharacterCount(){
        return this.adder.getSum();
    }
}

class CountingAdder implements Adder{
    protected sum:number=0;
    protected count:number=0;
    protected max: number | null = null;
    add(nr:number){
        this.sum+=nr;
        this.count++;

        if (this.max === null || nr > this.max) {
            this.max = nr;
        }
    }
    getSum(): number {
        return this.sum;
    }
    getAverage(){
        if(this.count>0){
            return this.sum/this.count;
        }
        return 0;
    }
    getMax(): number | null {
        return this.max;
    }
}

let adder1:CountingAdder=new CountingAdder();
let counter1:CharCounter=new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
console.log(adder1.getMax());