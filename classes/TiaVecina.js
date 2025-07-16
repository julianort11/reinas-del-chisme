const Chismosa = require("./Chismosa.js")

class TiaVecina extends Chismosa{
    recolectarInfo(){
        console.log(this.nombre + " Aprovecha la reunion del barrio para escuchar discretamente" );
        this.aumentarChisme(Math.random()* 2 + 2 );
    }
    contarChisme(){
        console.log(this.nombre + " Difunde el chismem mientras ofrece cafecito");
        const aumento = Math.random() * 3 + 3;
        this.aumentarChisme(aumento);
        if (aumento > 5) this.afectarReputacion(- Math.random() * 2);
    }
}

module.exports = TiaVecina;