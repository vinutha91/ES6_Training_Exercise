fetch('https://api.jsonbin.io/b/5d24f4a90e09805769fdabe3')
.then(function(data) {
	return data.json()
})
.then(function(data) {
    console.log(data);
});

// https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

// POSTING A DATA TO THE API
fetch('https://api.jsonbin.io/b/5d24f4a90e09805769fdabe3', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
})