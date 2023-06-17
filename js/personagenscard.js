'use strict'

const getPersonagens = async () => {
    const url = `https://demon-slayer-api.onrender.com/v1`;
    const response = await fetch(url);
    const dado = await response.json();
    return dado;
  };
  
  const personagens = await getPersonagens();
  console.log(personagens);
  
  const carregarCard = async () => {
    const card = document.getElementById("cards");
    const cardsJSON = await personagens.map(criarCard);
  
    card.replaceChildren(...cardsJSON);
  };
  // styles() {
  //     const css = document.createElement('style')
  //     css.textContent =`
  
  //     *{
  //         margin: 0;
  //         padding: 0;
  //         box-sizing: border-box;
  //     }
  
  //     `
  // }
  
  const criarCard = (personagens) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url(${personagens.image})`;
  
    //   imagem.src = personagens.image;
  //   imagem.setAttribute("src", personagens.image);
  
    const nameCharacter = document.createElement("p");
    nameCharacter.classList.add("nome_character");
    nameCharacter.textContent = personagens.name;
    card.append(nameCharacter); 
  
    return card;
  };
  
  carregarCard();
  
  const cards = document.querySelector(".cards");




// const cardApi = () => {
//     const image = document.getElementById('image')
//     const url = `https://demon-slayer-api.onrender.com/v1/`
//     fetch(url).then(console.log)
//     // (image)
// }

// document.getElementById('image').addEventListener('click', cardApi)




// let img = document.querySelector('#image')

// //section que acomoda todas as cards
// let sectionConteudos = document.querySelector('.conteudos')

// //endereço da API
// const url = 'https://demon-slayer-api.onrender.com/v1/'

// function pegarDados(i) {

//     fetch(url)
//         .then(response => response.)
    
// }