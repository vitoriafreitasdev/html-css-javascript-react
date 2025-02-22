

/*
console.log(document.body)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[1].textContent)*/

// tag

const listItens = document.getElementsByTagName("li")
console.log(listItens)
/*
// id

const title = document.getElementById("title")
console.log(title)

// class

const products = document.getElementsByClassName("product")

console.log(products)

// querySelectAll para varios elementos e querySelector para um unico

const productsQuery = document.querySelectorAll(".product")

console.log(productsQuery)

const main = document.querySelector("#main-container")

console.log(main)

// insertBefore

const p = document.createElement("p")

const header = title.parentElement

header.insertBefore(p, title)

// appendChild

const navLinks = document.querySelector("nav ul")
const li = document.createElement("li")

navLinks.appendChild(li)

// replaceChild

const h2 = document.createElement("h2")

h2.textContent = "Meu novo titulo"

header.replaceChild(h2, title)

// createTextNode

const myText = document.createTextNode("Agora vamos colocar mais um título")

console.log(myText)

const h3 = document.createElement("h3")

h3.appendChild(myText)
console.log(h3)

main.appendChild(h3)

// trabalhando com atributos
const firstLink = navLinks.querySelector("a")

console.log(firstLink)

firstLink.setAttribute("href", "https://www.google.com")

console.log(firstLink.getAttribute("href"))

firstLink.setAttribute("target", "_blank")

// altura e largura

const footer = document.querySelector("footer")

console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

console.log(footer.clientWidth)
console.log(footer.clientHeight)
*/
// posicao do elemento
const products = document.getElementsByClassName("product")

console.log(products)

const product1 = products[0]

console.log(product1.getBoundingClientRect())

// css com js

const main = document.querySelector("#main-container")

main.style.color = "#333"
main.style.backgroundColor = "lightblue"
main.style.paddingBottom = "15px"

// alterando estilo de varios elementos

for (const li of listItens){
    li.style.backgroundColor = "lightblue"
}