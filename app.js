// import
const app = require('express')();
const request = require('request');

// app.get('/', (req, res) =>
// request('https://api.myjson.com/bins/m6wsy', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log(body);
//   console.log('HELL0');
//   let data= JSON.parse(body)
//   let htmlString='';
//   for(let prop in data){
//     htmlString+=`<h1>${prop}<h1>`
//     console.log(prop);
//   }
//   res.send(htmlString)
// // })
// )
 app.get('/',(req,res) => res.send('hello'))
app.listen(3000, function () {
  console.log('Gif Search listening on port localhost:3000!');
});
