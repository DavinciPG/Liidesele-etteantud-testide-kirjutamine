interface Adder{
    add(nr: number):void;
    zero():void;
    getSum():number;
}

class SimpleAdder implements Adder{
    protected sum:number=0;
    add(nr:number){this.sum+=nr;}
    zero(){this.sum=0;}
    getSum(): number {
        return this.sum;
    }
}

class StoringAdder implements Adder{
    protected store:number[]=[];
    add(nr:number){
        this.store.push(nr);
    }
    zero(){
        this.store.splice(0);
    }
    getSum(): number {
        let sum:number=0;
        for(let amount of this.store){sum+=amount;}
        return sum;
    }
    getAverage(){
        if(this.store.length>0){
            return this.getSum()/this.store.length;
        }
        return 0;
    }
    getRange(){
        if(this.store.length==0){return 0;}
        let minimum:number=this.store[0];
        let maximum:number=minimum;
        for(let amount of this.store){
            if(amount<minimum){minimum=amount;}
            if(amount>maximum){maximum=amount;}
        }
        return maximum-minimum;
    }
}

class CharCounter{
    constructor(protected adder:Adder){}
    private words: string[] = [];
    addWordCharacters(word:string):void{
        this.adder.add(word.length);
        this.words.push(word);
    }
    zero():void{
        this.adder.zero();
    }
    getCharacterCount(){
        return this.adder.getSum();
    }

    getLongestWordLength(): number {
        let longestLength = 0;
        const words = this.words;

        for (const word of words) {
            const length = word.length;
            if (length > longestLength) {
                longestLength = length;
            }
        }

        return longestLength;
    }
}

export{
    Adder,
    SimpleAdder,
    StoringAdder,
    CharCounter
}