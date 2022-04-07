"use strict"

const btn = document.querySelector('button')

// btn.onclick = function() {

// }

// // mouseenter, 
// btn.addEventListener('click', (event) => {
//     console.log(event.target);
//     event.target.remove()
//     // alert('cliked')
// })

let i = 0
const deleteElement = (event) => {
    event.target.remove()
    i++
    if(i == 1) {
        btn.removeEventListener('click', deleteElement)
    }
}
btn.addEventListener('click', deleteElement)


// event.preventDefault()
// btn.addEventListener('click', deleteElement, {once: true})