var colors = require('colors');
const inquirer = require('inquirer');


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const menu = () => {
    console.log(`${'°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°'.green}`);
    console.log(`${'           First Application'.blue}`);
    console.log(`${'°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°'.green}`);

    rl.question(`¿Qué operación quieres hacer? 1:Suma, 2:Resta, 3:Multiplicacion 0:Salir `, (answer) => {
        console.log('Selección: ', answer);

        switch (answer) {
            case '1':
                console.log('Has seleccionado SUMA.');
                
                rl.question('Ingrese el primer número: ', (num1) => {
                    rl.question('Ingrese el segundo número: ', (num2) => {
                        const resultado = parseFloat(num1) + parseFloat(num2);
                        console.log(`El resultado de la suma es: ${resultado}`);
                        rl.close();
                    });
                });

                break;
            case '2':
                console.log('Has seleccionado RESTA.');
                
                
                rl.question('Ingrese el primer número: ', (num1) => {
                    rl.question('Ingrese el segundo número: ', (num2) => {
                        const resultado = parseFloat(num1) - parseFloat(num2);
                        console.log(`El resultado de la resta es: ${resultado}`);
                        rl.close();
                    });
                });
                break;
            case '3':
                console.log('Has seleccionado MULTIPLICACIÓN.');
                
                rl.question('Ingrese el primer número: ', (num1) => {
                    rl.question('Ingrese el segundo número: ', (num2) => {
                        const resultado = parseFloat(num1) * parseFloat(num2);
                        console.log(`El resultado de la suma es: ${resultado}`);
                        rl.close();
                    });
                });
                break;
            case '0':
                console.log('Saliendo...');
                rl.close();
                return;
            default:
                console.log('Opción inválida.');
                break;
        }

       
    });
};


module.exports = {
    menu
};
