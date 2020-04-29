// Отображение результатов голосования
// /sse/vote/stats — это SSE-стрим с текущими результатами голосования

const progress = {};
    progress.cats = document.querySelector('#progress-bar-cats')
    progress.dogs = document.querySelector('#progress-bar-dogs')
    progress.parrots = document.querySelector('#progress-bar-parrots')

console.log("progress", progress)

const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url, header)

ES.onerror = error => {
    ES.readyState ? progress.textContent = "Some error" : null;
}

let firstTime = true;
ES.onmessage = message => {
    let votes = JSON.parse(message.data);
    votes.max = Math.max(...Object.values(votes));
    // cats
    progress.cats.style.cssText = `width: ${votes.cats/votes.max*100}%;`
    progress.cats.textContent = `${votes.cats}`
    // dogs            
    progress.dogs.style.cssText = `width: ${votes.dogs/votes.max*100}%;`
    progress.dogs.textContent = `${votes.dogs}`
    // parrots            
    progress.parrots.style.cssText = `width: ${votes.parrots/votes.max*100}%;`
    progress.parrots.textContent = `${votes.parrots}`
}
