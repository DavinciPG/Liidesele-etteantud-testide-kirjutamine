var TollidSentimeetriteks = /** @class */ (function () {
    function TollidSentimeetriteks() {
    }
    TollidSentimeetriteks.prototype.arvuta = function (tollid) {
        return tollid * 2.54;
    };
    TollidSentimeetriteks.prototype.sisendMõõtühik = function () {
        return "toll";
    };
    TollidSentimeetriteks.prototype.väljundMõõtühik = function () {
        return "cm";
    };
    return TollidSentimeetriteks;
}());
var DetsimeetridMillimeetriteks = /** @class */ (function () {
    function DetsimeetridMillimeetriteks() {
    }
    DetsimeetridMillimeetriteks.prototype.arvuta = function (detsimeetrid) {
        return detsimeetrid * 10;
    };
    DetsimeetridMillimeetriteks.prototype.sisendMõõtühik = function () {
        return "dm";
    };
    DetsimeetridMillimeetriteks.prototype.väljundMõõtühik = function () {
        return "mm";
    };
    return DetsimeetridMillimeetriteks;
}());
var TemperatuuriTeisendaja = /** @class */ (function () {
    function TemperatuuriTeisendaja(kordaja) {
        this.kordaja = kordaja;
    }
    TemperatuuriTeisendaja.prototype.arvuta = function (celsium) {
        return (celsium * this.kordaja) + 32;
    };
    TemperatuuriTeisendaja.prototype.sisendMõõtühik = function () {
        return "°C";
    };
    TemperatuuriTeisendaja.prototype.väljundMõõtühik = function () {
        return "°F";
    };
    return TemperatuuriTeisendaja;
}());
var TaksoHind = /** @class */ (function () {
    function TaksoHind(kordaja, vabaLiige) {
        this.kordaja = kordaja;
        this.vabaLiige = vabaLiige;
    }
    TaksoHind.prototype.arvuta = function (kilomeetrid) {
        return this.vabaLiige + (kilomeetrid * this.kordaja);
    };
    TaksoHind.prototype.sisendMõõtühik = function () {
        return "km";
    };
    TaksoHind.prototype.väljundMõõtühik = function () {
        return "€";
    };
    return TaksoHind;
}());
var ArvutusteLadu = /** @class */ (function () {
    function ArvutusteLadu(arvutusfunktsioon) {
        this.arvutusfunktsioon = arvutusfunktsioon;
        this.sisendid = [];
        this.tulemused = [];
    }
    ArvutusteLadu.prototype.lisaSisend = function (x) {
        this.sisendid.push(x);
        this.tulemused.push(this.arvutusfunktsioon.arvuta(x));
    };
    ArvutusteLadu.prototype.kuvatudTulemused = function () {
        var tulemused = [];
        for (var i = 0; i < this.sisendid.length; i++) {
            var sisend = this.sisendid[i];
            var tulemus = this.tulemused[i];
            var sisendMõõtühik = this.arvutusfunktsioon.sisendMõõtühik();
            var väljundMõõtühik = this.arvutusfunktsioon.väljundMõõtühik();
            tulemused.push("".concat(sisend, " ").concat(sisendMõõtühik, " - ").concat(tulemus, " ").concat(väljundMõõtühik));
        }
        return tulemused.join("\n");
    };
    return ArvutusteLadu;
}());
var tollidSentimeetriteks = new TollidSentimeetriteks();
var arvutusteLadu1 = new ArvutusteLadu(tollidSentimeetriteks);
arvutusteLadu1.lisaSisend(20);
arvutusteLadu1.lisaSisend(50);
console.log("1. Tollid sentimeetriteks:");
console.log(arvutusteLadu1.kuvatudTulemused());
var detsimeetridMillimeetriteks = new DetsimeetridMillimeetriteks();
var arvutusteLadu2 = new ArvutusteLadu(detsimeetridMillimeetriteks);
arvutusteLadu2.lisaSisend(20);
arvutusteLadu2.lisaSisend(50);
console.log("\n2. Detsimeetrid millimeetriteks:");
console.log(arvutusteLadu2.kuvatudTulemused());
var temperatuuriTeisendaja = new TemperatuuriTeisendaja(1.8);
var arvutusteLadu3 = new ArvutusteLadu(temperatuuriTeisendaja);
arvutusteLadu3.lisaSisend(0);
arvutusteLadu3.lisaSisend(100);
console.log("\n3. Temperatuuri teisendamine:");
console.log(arvutusteLadu3.kuvatudTulemused());
var taksoHind = new TaksoHind(0.8, 2);
var arvutusteLadu4 = new ArvutusteLadu(taksoHind);
arvutusteLadu4.lisaSisend(5);
arvutusteLadu4.lisaSisend(10);
console.log("\n4. Takso hind:");
console.log(arvutusteLadu4.kuvatudTulemused());
