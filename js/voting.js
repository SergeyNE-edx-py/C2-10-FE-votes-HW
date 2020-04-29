// Голосование
// /sse/vote/cats — увеличивает на 1 число голосов за "коты"
// /sse/vote/dogs — увеличивает на 1 число голосов за "собаки"
// /sse/vote/parrots — увеличивает на 1 число голосов за "попугаи"

const button = {};
    button.cats = document.querySelector('#cats')
    button.dogs = document.querySelector('#dogs')
    button.parrots = document.querySelector('#parrots')

console.log("button", button)

button.cats.addEventListener('click', () => { toVote("/sse/vote/cats") })
button.dogs.addEventListener('click', () => { toVote("/sse/vote/dogs") })
button.parrots.addEventListener('click', () => { toVote("/sse/vote/parrots") })

function toVote(POSTale) {
    let request = new XMLHttpRequest();
    request.open("POST", "https://sf-pyw.mosyag.in"+POSTale);
    request.send();
}