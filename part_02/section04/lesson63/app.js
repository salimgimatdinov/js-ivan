"use strict"


const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block')

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('red'));
// console.log(btns[0].classList.toggle('red'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }else {
//     console.log('false');
// }

// btns[0].addEventListener('click', (e) => {
//     e.preventDefault()
//     // if(!btns[0].classList.contains('red')) {
//     //     btns[0].classList.add('red')
//     // } else {
//     //     btns[0].classList.remove('red')
//     // }
//     btns[0].classList.toggle('red')
// })

wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);
    if(event.target && event.target.tagName == "BUTTON") {
        console.log('hello');
    }
})

const btn = document.createElement('button')
btn.classList.add('red')
wrapper.append(btn)