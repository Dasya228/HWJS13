const balloon = document.querySelectorAll('.box')
const input = document.querySelectorAll('.checkbox')
const allcheck = document.querySelector('#allcheck')
console.log(balloon)


balloon.forEach((balloon, idx)=>{
    balloon.addEventListener('click',()=>{
        balloon.classList.toggle('bgRed')
        input[idx].checked=!input[idx].checked

    })

})
allcheck.addEventListener('click',()=>{
    input.forEach((el,idx)=>{
        el.checked = !el.checked
        balloon.forEach((balloon)=>{
            balloon.classList.toggle('bgGreen')
        })
    })

})
