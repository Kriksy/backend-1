const axios = require("axios");

const headers = {"User-Agent": "axios", "Accept": "text/plain"};
axios
    .get("https://icanhazdadjoke.com", {headers: headers})
    .catch((err) => { return "ERROR FETCHING DAD JOKES" })
    .then((data) => { console.log("Same dad joke:", data); })

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