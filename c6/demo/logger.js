import fs from 'fs';
import dayjs from 'dayjs';

/**
 * Guarda una frase en un archivo de log con la fecha actual.
 * @param {string} frase - La frase a guardar.
 */
export const registrarLog = (frase) => {
    const fecha = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const entrada = `[${fecha}] - ${frase}\n`;
    
    fs.appendFileSync('logs.txt', entrada, 'utf-8');
};
