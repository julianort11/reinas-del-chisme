const Chismosa = requiere("./Chismosa.js")

class EstudianteEspia extends Chismosa{
    recolectarInfo(){
        console.log(this.nombre + "Lee chats ajenos desde el último puesto del salón" );
        this.aumentarChisme(Math.random()* 3 + 1 );
    }
    contarChisme(){
        console.log(this.nombre + "Filtra el chisme por estados en WhatsApp");
        this.aumentarChisme(Math.random()* 2 + 2);
        if (Math.random() < 0.3) this.afectarReputacion(- Math.random() * 2);
    }
}

module.exports = EstudianteEspia;