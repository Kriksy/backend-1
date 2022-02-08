const axios = require("axios");

const headers = {headers: {"User-Agent": "axios", "Accept": "text/plain"}};
axios.get("https://icanhazdadjoke.com/", headers)
  .then((response) => { console.log(response.data) })
  .catch((error) => { console.log(error) });
