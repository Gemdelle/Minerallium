function deepCopy(obj:any): any {
  if (typeof obj !== "object" || obj === null) {
    return obj; // Si no es un objeto, devuelve el valor tal cual
  }

  if (Array.isArray(obj)) {
    // Si es un array, crea una copia del array y copia profundamente cada elemento
    return obj.map((item: any) => deepCopy(item));
  }

  // Si es un objeto, crea un nuevo objeto y copia profundamente cada propiedad
  const newObj: any = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepCopy(obj[key]);
    }
  }
  return newObj;
}

export default deepCopy;