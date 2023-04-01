function mudarCor() {
  /* acessando meu documento html (.) acessando propriedades e objetos*/
  let html = document.documentElement
  /* Usando a função Toggle = ela realiza Automaticamente essa troca de classe */
  html.classList.toggle("light")

  //Pegar a img
  const img = document.querySelector("#profile img")
  // Substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/Avatar_1.png")
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("alt", "Foto De Gabriel Medina de Blusa verde")
    
  } else {
    img.setAttribute("src", "assets/Avatar.png")
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("alt", "Foto De Gabriel com Blusa Cinza")
  }
}

//Opção para mudar a class no htm
//if (html.classList.contains("light")) {
/* ClassLista = verficar se contem na lista de classe informada  */
//html.classList.remove("light")
/* Irá remover a classe que está no meu html */
//} else {html.classList.add("light")
/* Caso não tenha essa classe ela irá adicionar ela no html */

/* É POSSÍVEL REALIZAR DE UMA FORMA DIFERENTE E MAIS SIMPLES USANDO O TOGGLE */
