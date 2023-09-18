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

let adder1:Adder=new SimpleAdder();
adder1.add(3);
adder1.add(5);
adder1.add(29);
adder1.add(50);
adder1.zero();
console.log(adder1.getSum());