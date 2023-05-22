'use strict'

const cards = document.querySelector('.cards')

fetch('https://demon-slayer-api.onrender.com/v1')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(personagem  => {
            console.log(personagem)
            console.log(personagem.name)

        })
        //Criando um card padrão
        const card = document.createElement('div')
        card.classList.add('card')
        console.log(card)

         //Colocando cada card dentro da div cards
        cards.appendChild(card)

         //Preenchendo os dados de cada personagem
        card.innerHTML = `
        <a href="/nomedospersonagens" onclick="route()" class="link-image"></a>
        <img class="character" id ="image" src="./img/${personagem.image} " alt="">`
    })


// // const card = document.getElementById('card').value
// // const url = `https://demon-slayer-api.onrender.com/v1`