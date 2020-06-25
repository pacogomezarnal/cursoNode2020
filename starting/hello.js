const fs = require('fs');

const documento=fs.readFileSync('documento.txt','utf8');

console.log(documento);

const data=documento+" Paco";
fs.writeFileSync('documento.txt',data);
