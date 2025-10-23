const closeButtons = document.querySelectorAll('.close')
const cards = document.querySelectorAll('.card')
const telps = document.querySelectorAll('.telp')

// const card = document.querySelector('.card')

// closeButtons.addEventListener('click', function (e) {
//     // e.target.parentElement.style.display = 'none'
    
//     card.style.display = 'none'
// })

// document.body.addEventListener('click', function (event) {
//     console.log('body di-klik')
// })

telps.forEach(function (telp) {
    telp.addEventListener('click', function (event) {
        // event.stopPropagation()
        console.log('telp di-klik')
    })
})

cards.forEach(function (card) {
    card.addEventListener('click', function (event) {
        console.log('card di-klik')
    })
})

closeButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.stopPropagation()
        console.log('button di-klik')
        // event.target.parentElement.style.display = 'none'
        // console.log(event.target.previousElementSibling);
    })
})
