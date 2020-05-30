//Requires
const fs = require("fs");
const color = require('colors')

/* let base = 3;
let data = "";

for (let i = 1; i <= 10; i++) {
  data += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`./03-bases-node/tablas/tabla-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log(`El archivo tabla-${base}.txt ha sido creado`);
}); */

let crearArchivo = async (base, limite) => {
  if (!Number(base)) {
    throw new Error(`La base ${base} debe ser un número.`);
  }
  if (!Number(limite)) {
    throw new Error(`El limite ${limite} debe ser un número.`);
  }
  if (limite < 1) {
    throw new Error(`El limite ${limite} debe ser mayor o igual a 1.`);
  }
  let data = "";

  for (let i = 1; i <= limite; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
  }
  fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
    if (err) {
      throw err;
    }
  });

  return `tabla-${base}.txt`;
};

let listarTabla = async (base, limite) => {
  if (!Number(base)) {
    throw new Error(`La base ${base} debe ser un número.`);
  }
  if (!Number(limite)) {
    throw new Error(`El limite ${limite} debe ser un número.`);
  }
  if (limite < 1) {
    throw new Error(`El limite ${limite} debe ser mayor o igual a 1.`);
  }

  let data = `**********************************\n
    ******* Tabla del ${base} ********\n
**********************************\n`.yellow;

  for (let i = 1; i <= limite; i++) {
    data += `Base ${base} * ${i} = ${base * i}\n`.cyan;
  }
  return data;
};


module.exports = {
  crearArchivo,
  listarTabla,
};
