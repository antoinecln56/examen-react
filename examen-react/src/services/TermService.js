const endpoint = "http://localhost:3000/terms"

export function getTerms(){
	return fetch(endpoint)
		.then(response => {
			console.log(`response status`, response.status);
			return response.json();
		})
		.catch(error => console.log("UnitService error: ", error));
}

export function getTermById(id) {
	return fetch(`${endpoint}/${id}`)
		.then(response => {
			console.log(`response status`, response.status);
			return response.json();
		})
		.catch(error => console.log("UnitService error: ", error));
}

export function getColsByTermId(id) {
  
    return fetch(`${endpoint}/${id}/cols` )
      .then(response => {
        console.log(`response status`, response.status);
        return response.json();
      })
      .catch(error => console.log("Error: ", error));
  }

export function addTerm(term) {
	return fetch(endpoint, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify({title: term.title})
		})
		.catch(error => console.log("UnitService error: ", error));
}

export function updateTerm(term) {
	return fetch(`${endpoint}/${term.id}`, {
		method: "PUT",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(term)
		})
		.catch(error => console.log("Error: ", error));
}

export function deleteTerm(id) {
	return fetch(`${endpoint}/${id}`, {
			method: "DELETE",
		})
		.catch(error => console.log("Error: ", error));
}