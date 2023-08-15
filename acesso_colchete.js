const cliente = {
    nome: "Andre",
    idade: 32,
    CPF: "1112223344",
    email: "andre@dominio.com",
}

//console.log(cliente)

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente["CPF"].substring(0, 3)}`)

const chave = ["nome", "idade", "CPF", "email", "altura"];

chave.forEach((chave)=> {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})