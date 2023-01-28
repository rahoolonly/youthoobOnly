const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://youtube-data8.p.rapidapi.com/auto-complete/',
  params: {q: 'cartoon', hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': '6f4cf2c761msh81ea4b8aeb26428p1938b7jsn7c1393e4927f',
    'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
    alert('im here')
}).catch(function (error) {
	console.error(error);
});