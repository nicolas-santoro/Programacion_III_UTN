import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import usuarios from './MOCKDATA.js';

const rl = readline.createInterface({ input, output });

async function mostrarMenu() {
    console.log(`
    === Menú de opciones ===
    1. Todos los nombres de los trabajos de los usuarios.
    2. Todos los nombres de los países de los usuarios.
    3. Todos los usuarios de China.
    4. Todos los usuarios menores a los 21 años.
    5. Cantidad de usuarios masculinos.
    6. Cantidad de usuarios femeninos.
    7. Todos los nombres de las usuarias femeninas.
    8. Todos los mails de los usuarios masculinos.
    9. Todos los nombres, apellidos y ciudades de todos los usuarios.
    10. Todos los nombres, apellidos y ciudades de todos los usuarios masculinos mayores de 35 años.
    11. Promedio de edad de todos los usuarios.
    12. Promedio de edad de todos los usuarios masculinos.
    13. Promedio de edad de todos los usuarios de Egipto.
    14. Salir
    `);
    }

async function preguntarOpcion() {
    await mostrarMenu();

    const opcion = await rl.question("Seleccioná una opción: ");

    switch (opcion) {
        case '1':
            const trabajos = usuarios.map(usuario => usuario.trabajo);

            console.log(trabajos);


            break;

        case '2':
            const paises = usuarios.map(usuario => usuario.pais);

            console.log(paises);


            break;

        case '3':
            let usuarios_chinos = usuarios.filter(usuario => usuario.pais === 'China');

            console.log(usuarios_chinos);


            break;

        case '4':
            let menos_21 = usuarios.filter(usuario => usuario.edad < 21);

            console.log(menos_21);


            break;

        case '5':
            const cantidadHombres = usuarios.reduce((acumulador, usuario) => {
                if (usuario.sexo === 'Male'){
                    acumulador += 1;
                }

                return acumulador;
            }, 0);

            console.log(`Hay ${cantidadHombres} usuarios masculinos.`)


            break;

        case '6':
            const cantidadMujeres = usuarios.reduce((acumulador, usuario) => {
                if (usuario.sexo === 'Female'){
                    acumulador += 1;
                }

                return acumulador;
            }, 0);

            console.log(`Hay ${cantidadMujeres} usuarias femeninas.`)


            break;

        case '7':
            const nombresMujeres = usuarios
                .filter(usuario => usuario.sexo === 'Female')
                .map(usuario => usuario.nombre);

            console.log(nombresMujeres);


            break;

        case '8':
            const emailsHombres = usuarios
                .filter(usuario => usuario.sexo === 'Male')
                .map(usuario => usuario.email);

            console.log(emailsHombres);


            break;

        case '9':
            const datosLimitados = usuarios.map(usuario => ({
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                ciudad: usuario.ciudad
            }));
            
            console.log(datosLimitados);


            break;

        case '10':
            const datosLimitadisimos = usuarios
                .filter(usuario => usuario.sexo === 'Male' && usuario.edad >= 35)
                .map(usuario => ({
                    nombre: usuario.nombre,
                    apellido: usuario.apellido,
                    ciudad: usuario.ciudad
                }));

            console.log(datosLimitadisimos);


            break;

        case '11':
            const promedioEdadTodos = usuarios.reduce((acumulador, usuario) => acumulador + usuario.edad, 0) / usuarios.length;

            console.log(`El promedio de edad de todos los usuarios es de ${promedioEdadTodos} años.`);


            break;

        case '12':
            const promedioEdadHombres = usuarios
            .filter(usuario => usuario.sexo === 'Male')
            .reduce((acumulador, usuario) => acumulador + usuario.edad, 0) / usuarios.length;

            console.log(`El promedio de edad de todos los usuarios masculinos es de ${promedioEdadHombres} años.`);


            break;

        case '13':
            const promedioEdadEgipcios = usuarios
            .filter(usuario => usuario.pais === 'Egypt')
            .reduce((acumulador, usuario) => acumulador + usuario.edad, 0) / usuarios.length;

            console.log(`El promedio de edad de todos los usuarios de Egipto es de ${promedioEdadEgipcios} años.`);


            break;

        case '14':
            console.log("Saliendo del programa...");
            
            rl.close();
            return;

        default:
            console.log("Opción inválida. Por favor elegí un número del 1 al 14.");
    }

    await preguntarOpcion();
}

preguntarOpcion();