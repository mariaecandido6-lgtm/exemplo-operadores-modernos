//========================================================
//5- COMBINANDO ?. E ??
//========================================================

console.log("\n=== 5. Combinando ?. e ?? ===");

//Exemplo 1: Quando o usuario e undefined
const usuario1 = undefined;
const status1 = usuario1?.ativo ?? "Desconhecido";
console.log("1. Usuario undefined -> Status:", status1); //"Desconhecido"

//Exemplo 2: Quando o usuario existe mas nao possui a propriedade 'ativo'
const usuario2 = { nome: "Lucas"};
const status2 = usuario2?.ativo ?? "Desconhecido";
console.log("2. Sem propriedade ativo -> Status:", status2);

//Exemplo 3: Quando a propriedade ativo e false
const usuario3 = { nome: "Marina", ativo:false };
const status3 = usuario3?.ativo ?? "Desconhecido";
console.log("3. ATivo e false -> Status:", status3);

//Eemplo 4: Quando a propriedade ativo e true
const usuario4 = { nome: "Pedro", ativo:true };
const status4 = usuario4?.ativo ?? "Desconhecido";
console.log("4. Ativo e true -> Status:", status4);