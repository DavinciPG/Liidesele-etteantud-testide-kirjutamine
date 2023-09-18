
interface ArvutusFunktsioon {
    arvuta(x: number): number;
    sisendMõõtühik(): string;
    väljundMõõtühik(): string;
}

class TollidSentimeetriteks implements ArvutusFunktsioon {
    arvuta(tollid: number): number {
        return tollid * 2.54;
    }

    sisendMõõtühik(): string {
        return "toll";
    }

    väljundMõõtühik(): string {
        return "cm";
    }
}

class DetsimeetridMillimeetriteks implements ArvutusFunktsioon {
    arvuta(detsimeetrid: number): number {
        return detsimeetrid * 10;
    }

    sisendMõõtühik(): string {
        return "dm";
    }

    väljundMõõtühik(): string {
        return "mm";
    }
}

class TemperatuuriTeisendaja implements ArvutusFunktsioon {
    constructor(protected kordaja: number) {}

    arvuta(celsium: number): number {
        return (celsium * this.kordaja) + 32;
    }

    sisendMõõtühik(): string {
        return "°C";
    }

    väljundMõõtühik(): string {
        return "°F";
    }
}

class TaksoHind implements ArvutusFunktsioon {
    constructor(protected kordaja: number, protected vabaLiige: number) {}

    arvuta(kilomeetrid: number): number {
        return this.vabaLiige + (kilomeetrid * this.kordaja);
    }

    sisendMõõtühik(): string {
        return "km";
    }

    väljundMõõtühik(): string {
        return "€";
    }
}

class ArvutusteLadu {
    protected sisendid: number[] = [];
    protected tulemused: number[] = [];

    constructor(protected arvutusfunktsioon: ArvutusFunktsioon) {}

    lisaSisend(x: number): void {
        this.sisendid.push(x);
        this.tulemused.push(this.arvutusfunktsioon.arvuta(x));
    }

    kuvatudTulemused(): string {
        const tulemused: string[] = [];
        for (let i = 0; i < this.sisendid.length; i++) {
            const sisend = this.sisendid[i];
            const tulemus = this.tulemused[i];
            const sisendMõõtühik = this.arvutusfunktsioon.sisendMõõtühik();
            const väljundMõõtühik = this.arvutusfunktsioon.väljundMõõtühik();
            tulemused.push(
                `${sisend} ${sisendMõõtühik} - ${tulemus} ${väljundMõõtühik}`
            );
        }
        return tulemused.join("\n");
    }
}

const tollidSentimeetriteks = new TollidSentimeetriteks();
const arvutusteLadu1 = new ArvutusteLadu(tollidSentimeetriteks);
arvutusteLadu1.lisaSisend(20);
arvutusteLadu1.lisaSisend(50);
console.log("1. Tollid sentimeetriteks:");
console.log(arvutusteLadu1.kuvatudTulemused());

const detsimeetridMillimeetriteks = new DetsimeetridMillimeetriteks();
const arvutusteLadu2 = new ArvutusteLadu(detsimeetridMillimeetriteks);
arvutusteLadu2.lisaSisend(20);
arvutusteLadu2.lisaSisend(50);
console.log("\n2. Detsimeetrid millimeetriteks:");
console.log(arvutusteLadu2.kuvatudTulemused());

const temperatuuriTeisendaja = new TemperatuuriTeisendaja(1.8);
const arvutusteLadu3 = new ArvutusteLadu(temperatuuriTeisendaja);
arvutusteLadu3.lisaSisend(0);
arvutusteLadu3.lisaSisend(100);
console.log("\n3. Temperatuuri teisendamine:");
console.log(arvutusteLadu3.kuvatudTulemused());

const taksoHind = new TaksoHind(0.8, 2);
const arvutusteLadu4 = new ArvutusteLadu(taksoHind);
arvutusteLadu4.lisaSisend(5);
arvutusteLadu4.lisaSisend(10);
console.log("\n4. Takso hind:");
console.log(arvutusteLadu4.kuvatudTulemused());