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

export{
    Adder,
    SimpleAdder
}