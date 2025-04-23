function obtenerSignoZodiacal(fechaNacimiento) {
    const fecha = fechaNacimiento.split('-');

    const dia = parseInt(fecha[0]);

    const mes = parseInt(fecha[1]);
  
    // Los rangos de las fechas de los signos zodiacales
    const signos = [
      { signo: 'Capricornio', fin: [19, 1] },
      { signo: 'Acuario', fin: [18, 2] },
      { signo: 'Piscis', fin: [20, 3] },
      { signo: 'Aries', fin: [19, 4] },
      { signo: 'Tauro', fin: [20, 5] },
      { signo: 'Géminis', fin: [20, 6] },
      { signo: 'Cáncer', fin: [22, 7] },
      { signo: 'Leo', fin: [22, 8] },
      { signo: 'Virgo', fin: [22, 9] },
      { signo: 'Libra', fin: [22, 10] },
      { signo: 'Escorpio', fin: [21, 11] },
      { signo: 'Sagitario', fin: [21, 12] },
      { signo: 'Capricornio', fin: [31, 12] } // Capricornio también cubre diciembre
    ];
  
    // Encontrar el signo correspondiente según el día y mes
    for (let i = 0; i < signos.length; i++) {
      const signo = signos[i];

      const [diaLimite, mesLimite] = signo.fin;
  
      if (mes < mesLimite || (mes === mesLimite && dia <= diaLimite)) {
        return signo.signo;
      }
    }
  }
  
// Ejemplo de uso
console.log(obtenerSignoZodiacal("23-07-1995"));  // Leo
console.log(obtenerSignoZodiacal("15-02-1985"));  // Acuario
console.log(obtenerSignoZodiacal("02-12-2000"));  // Sagitario  