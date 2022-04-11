const s=document.querySelector("#para")
console.log(s)
const btn=document.querySelector('#red')
btn.addEventListener('click',()=>
{
s.classList.toggle("Red")
})
const btn2=document.querySelector('#yellow')
btn2.addEventListener('click',()=>{
    s.classList.toggle('Yellow')
})
const btn3=document.querySelector('#violet')
btn3.addEventListener('click',()=>{s.classList.toggle('Violet')})

const btn4=document.querySelector('#green')
btn4.addEventListener('click',()=>{s.classList.toggle('Green')})
const btn5=document.querySelector("#blue")
btn5.addEventListener('click',()=>{s.classList.toggle('Blue')})
