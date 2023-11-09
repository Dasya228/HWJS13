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
    const innercheck = input[0].checked
    input.forEach((el,idx)=>{
        el.checked = !innercheck
        balloon.forEach((balloon)=>{
            balloon.classList.toggle('bgGreen')
        })
    })

})
