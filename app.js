var overlay = document.querySelector('.blackBackground')
var showModal1 = document.querySelector('.showModal1')
var showModal2 = document.querySelector('.showModal2')
var showModal3 = document.querySelector('.showModal3')
var modalbox1 = document.querySelector('.modalbox1')
var modalbox2 = document.querySelector('.modalbox2')
var modalbox3 = document.querySelector('.modalbox3')
var closebutton1 = document.querySelector('.closebutton1')
var closebutton2 = document.querySelector('.closebutton2')
var closebutton3 = document.querySelector('.closebutton3')

// console.log(modalbox1)



showModal1.addEventListener('click', ()=>{
    overlay.classList.remove('hidden')
    modalbox1.classList.remove('hidden')
})
closebutton1.addEventListener('click', ()=>{
    overlay.classList.add('hidden')
    modalbox1.classList.add('hidden')
})



showModal2.addEventListener('click', ()=>{
    overlay.classList.remove('hidden')
    modalbox2.classList.remove('hidden')
})
closebutton2.addEventListener('click', ()=>{
    overlay.classList.add('hidden')
    modalbox2.classList.add('hidden')
})



showModal3.addEventListener('click', ()=>{
    overlay.classList.remove('hidden')
    modalbox3.classList.remove('hidden')
})
closebutton3.addEventListener('click', ()=>{
    overlay.classList.add('hidden')
    modalbox3.classList.add('hidden')
})
