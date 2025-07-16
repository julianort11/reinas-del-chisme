class Chismosa {
    #reputacion;
    #nivelChisme;
    constructor (nombre, reputacion, nivelChisme){
        if (this.constructor === Chismosa) {
            throw new Error ("No es posible crear un objeto de tipo Chismosa")
        }
        this.nombre = nombre;
        this.#reputacion = reputacion;
        this.#nivelChisme = nivelChisme;
    }

    recolectarInfo() {
        throw new Error("Este método no tiene implementación porque es abstracto!!")
    }

    contarChisme() {
        throw new Error("Este método no tiene implementación porque es abstracto!!")
    }

    getReputacion() {
        return this.#reputacion;
    }

    getNivelChisme() {
        return this.#nivelChisme;
    }

    aumentarChisme(cantidad){
        this.#nivelChisme = Math.min(10, this.#nivelChisme + cantidad)
    }

    afectarReputacion(cantidad){
        this.#reputacion = Math.max(0, Math.min(this.#reputacion + cantidad))
    }
}

module.exports = Chismosa;