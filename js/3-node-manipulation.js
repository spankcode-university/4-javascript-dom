let liBaru = document.createElement('li')
let textLiBaru = document.createTextNode('item 2 terbaru')
liBaru.appendChild(textLiBaru)

let ul = document.querySelector('ul')
let li = document.getElementsByTagName('li')[1]
ul.insertBefore(liBaru, li)

const lastLi = document.querySelector('ul li:last-child')
console.log(lastLi)

ul.removeChild(lastLi)
