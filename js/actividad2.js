function esPalindromo(cadena) {
    // Convertir la cadena a minúsculas y eliminar los espacios en blanco
    cadena = cadena.toLowerCase().replace(/\s/g, '');
  
    // Comparar la cadena original con la cadena invertida
    for (let i = 0; i < cadena.length / 2; i++) {
      if (cadena[i] !== cadena[cadena.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  // Ejemplo de uso:
  const texto1 = "Anita lava la tina";
  const texto2 = "Hola mundo";
  console.log(esPalindromo(texto1)); // Salida: true
  console.log(esPalindromo(texto2)); // Salida: false