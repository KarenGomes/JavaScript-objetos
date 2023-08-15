const objPersonagem = {
    nome: "Gandalf", 
    classe: "Mago", 
    nivel: "20", 
    aliado: {
        nome: "Saruman",
        classe: "mago"
    }, 
    status: "desaparecido"
}

delete objPersonagem.aliado
console.log(objPersonagem.aliado);

delete objPersonagem["status"]
console.log(objPersonagem.status);
console.log(objPersonagem);