'use strict'

class cards extends HTMLElement{

    constructor(){
        super()

        this.shadow = this.attachShadow({ mode: 'open'})
        this.photo =null
    }
    // static get observedAttributes() {
    //     return ['photo']
    // }
}