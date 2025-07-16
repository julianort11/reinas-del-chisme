const chalk = require('chalk');
const TiaVecina = require('./classes/TiaVecina');
const CompaneraCuriosa = require('./classes/CompaneraCuriosa');
const EstudianteEspia = require('./classes/EstudianteEspia');

const chismosas = [
    new TiaVecina("Doña David"),
    new CompaneraCuriosa("Juan el de recursos"),
    new EstudianteEspia("Hely Espía")
];

console.log(chalk.bold("\n ¡Inicia la Batalla de Chismes! \n"));

for (let ronda = 1; ronda <= 2; ronda++) {
    console.log(chalk.underline(`\n Ronda ${ronda}`));
    chismosas.forEach(chismosa => {
        chismosa.recolectarInfo();
        chismosa.contarChisme();
    });
}

console.log(chalk.bold("\n Resultados Finales:\n"));
chismosas.forEach(c => {
    const chisme = c.getNivelChisme().toFixed(2);
    const reputacion = c.getReputacion().toFixed(2);

    let chismeColor = chalk.white;
    if (chisme >= 8) chismeColor = chalk.magenta;
    else if (chisme >= 5) chismeColor = chalk.yellow;

    let reputacionColor = chalk.white;
    if (reputacion >= 8) reputacionColor = chalk.orange || chalk.keyword('orange');
    else if (reputacion <= 2) reputacionColor = chalk.black;

    console.log(`👩 ${c.nombre}`);
    console.log(`   🧨 Chisme: ${chismeColor(chisme)} | 🤝 Reputación: ${reputacionColor(reputacion)}\n`);
});

// Determinar ganadora
const ganadora = chismosas.reduce((prev, curr) =>
    curr.getNivelChisme() > prev.getNivelChisme() ? curr : prev
);

console.log(chalk.greenBright(`🏆 La reina del chisme es ${ganadora.nombre} con un nivel de chisme de ${ganadora.getNivelChisme().toFixed(2)}!\n`));
