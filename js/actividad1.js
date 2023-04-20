function sumarArreglo(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    return suma;
  }
  
  // Ejemplo de uso:
  const numeros = [1, 2, 3, 4, 5];
  const resultado = sumarArreglo(numeros);
  console.log(resultado); // Salida: 15
  