const getPersonagens = async () => {

    const url = `https://demon-slayer-api.onrender.com/v1`
    const response = await fetch(url)
    const dado = await response.json()
    return dado
}
const personagens = await getPersonagens()
console.log(personagens)


 const carregarCard = async () => {
    const card = document.getElementById('cards')
    const cardsJSON = await personagens.map(criarCard)

    card.replaceChildren(...cardsJSON)
 }

 const criarCard = (personagens) => {
    console.log(personagens.image)

    const card = document.createElement('div')
        card.classList.add('card')

        const imagem = document.createElement('img')
        imagem.classList.add('character')
        imagem.src = personagens.image
        card.append(imagem)
        return card
 }

 carregarCard ()

const cards = document.querySelector('.cards')

// fetch('https://demon-slayer-api.onrender.com/v1')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         data.forEach(personagem  => {
//             console.log(personagem)
//             console.log(personagem.name)
//             console.log(personagem.image)


//         })
        
     
//     })


        //Criando um card padrão
        
      
    
         //Colocando cada card dentro da div cards
        
    
         //Preenchendo os dados de cada personagem
       
    
   

// // const card = document.getElementById('card').value
// // const url = `https://demon-slayer-api.onrender.com/v1`