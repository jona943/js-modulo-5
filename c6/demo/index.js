import fs from 'fs';
import chalk from 'chalk';
import { registrarLog } from './logger.js';

// Leer el archivo de frases
const leerFrases = () => {
    try {
        const data = fs.readFileSync('./frases.json', 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(chalk.red('Error al leer el archivo de frases:'), error.message);
        process.exit(1);
    }
};

// Obtener una frase aleatoria
const obtenerFraseAleatoria = (frases) => {
    const indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
};

// Función principal
const ejecutar = () => {
    const frases = leerFrases();
    const frase = obtenerFraseAleatoria(frases);

    // Formatear con colores
    console.log(chalk.bold.cyan('\n--- Frase del Día ---'));
    console.log(chalk.yellow(`"${frase}"`));
    console.log(chalk.bold.cyan('---------------------\n'));

    // Guardar log
    registrarLog(frase);
    console.log(chalk.green('La frase ha sido guardada en logs.txt'));
};

ejecutar();frases
