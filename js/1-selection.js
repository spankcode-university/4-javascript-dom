// getElementById()
const judul = document.getElementById('judul')
judul.innerText = 'Ini diganti melalui JS'
judul.style.color = 'red'

// getElementsByTagName()
const paragraf = document.getElementsByTagName('p')
// for (let i = 0; i < paragraf.length; i++) {
//     const element = paragraf[i];
//     paragraf[i].innerText = 'Test'
// }

// getElementsByClassName()
const paragraflagi = document.getElementsByClassName('p1')[0]
console.log(paragraflagi);
paragraflagi.innerHTML = "<a href='https://google.com'>Diganti melalui JS</a>"

// querySelector()
const query1 = document.querySelector('section#a p')
console.log(query1);
query1.style.backgroundColor = 'red'
query1.style.color = 'white'

// querySelectorAll()
const list = document.querySelectorAll('section#b ul li')
console.log(list)
list.forEach(function (li) {
    li.innerText = 'Li dirubah'
})

