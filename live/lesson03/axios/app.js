const axios = require("axios");

const headers = {"User-Agent": "axios", "Accept": "text/plain"};
//
// Get a joke and print it to the console
axios
    .get("https://icanhazdadjoke.com", {headers: headers})
    .catch((_err) => { return "ERROR FETCHING DAD JOKES" })
    .then((response) => { console.log(response.data); })

// Get a joke from icanhazdadjoke.com and forward it to our own server:
axios
    .get("https://icanhazdadjoke.com", {headers: headers})
    .then((response) => { 
        console.log("Received a dad joke:", response.data);
        return axios.post("http://localhost:3000", {joke: response.data});
     })
    .then((response) => {
        console.log("Response from server:", response.data);
    })
    .catch(err => { console.error("Failed to send dad joke", err) });
