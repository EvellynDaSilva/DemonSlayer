'use strict'

const routes ={
    '/' : '/pages/index.html',
    '/nomedospersonagens' : '/pages/nomedospersonagens.html',
    '/personagens' : '/pages/personagens.html'
}

const route = async () =>{
    window.event.preventDefault()

    console.log(window.event.target)
    window.history.pushState({}, "", window.event.target.href)

const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()
    

document.getElementById('root').innerHTML =html
    
}

window.route = route