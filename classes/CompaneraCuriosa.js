const Chismosa = requiere("./Chismosa.js")

class CompaneraCuriosa extends Chismosa{
    recolectarInfo(){
        console.log(this.nombre + "Hace preguntas aparentemente profesionales a los compañeros de trabajo" );
        this.aumentarChisme(Math.random());
    }
    contarChisme(){
        console.log(this.nombre + "Comenta el chisme como ejemplo de vida en el trabajo");
        this.aumentarChisme(Math.random() * 1.5);
        this.afectarReputacion(Math.random() * 1.5);
    }
}

module.exports = CompaneraCuriosa;
