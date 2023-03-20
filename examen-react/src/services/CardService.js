const endpoint = "http://localhost:3000/cards"

export function getCards() {
    return fetch(endpoint)
        .then(response => {
            console.log(`response status`, response.status);
            return response.json();
        })
        .catch(error => console.log("UnitService error: ", error));
}

export function getCardsByTermId(id) {

    return fetch(`${endpoint}?termId=${id}`)
        .then(response => {
            console.log(`response status`, response.status);
            return response.json();
        })
        .catch(error => console.log("Error: ", error));
}

export function addCard(card) {
    return fetch(endpoint, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({id: card.id, question: card.question, answer: card.answer, termId: card.termId, colId: card.colId })
    })
        .catch(error => console.log("UnitService error: ", error));
}

