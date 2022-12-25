
const apiReq = {
   "method": "get",
   "params": {
      "SelectionCriteria": {},
      "FieldNames": ["Id", "Name"]
   }
}

// const express = require("express");

// const app = express();
// const jsonParser = express.urlencoded({ extended: false });

// // получение отправленных данных
// app.post("/", jsonParser, function (req, res) {

//    if (!req.body) return res.sendStatus(400);

//    // const request = require('request');
//    // request.post({
//    //    headers: { 'Authorization': 'Bearer AQAAAAAUF2KZAAfpQCuJgxls6ElMg4VzLlykD6o' },
//    //    url: 'https://api-sandbox.direct.yandex.com/json/v5/campaigns',
//    //    body: JSON.stringify(req)
//    // }, function (error, response, body) {
//    //    //  console.log(body);
//    //    res.send(body);
//    // });

//    console.log(req.body);

// });

// app.listen(3000, function () {
//    console.log("Сервер ожидает подключения...");
// });

const express = require("express");
const cors = require("cors");

const app = express();
const jsonParser = express.json();

const corsOptions = {
   origin: 'http://localhost:3000',
   optionsSuccessStatus: 200, // For legacy browser support
   methods: "POST, GET, PUT"
}
app.use(cors(corsOptions));

// получение отправленных данных
app.post("/", jsonParser, function (req, res) {

   if (!req.body) return res.sendStatus(400);
   // console.log(JSON.stringify(req.body.apiUrl));
   // console.log(JSON.stringify(req.body.apiSet));
   // console.log(JSON.stringify(req.body.apiAuth));

   const request = require('request');

   request.post({
      headers: {
         'Authorization': req.body.apiAuth
      },
      url: req.body.apiUrl,
      body: JSON.stringify(req.body.apiSet)
   }, function (error, response, body) {
      console.log(body);
      console.log('====================');
      res.send(body);
   });

});


app.listen(8000, function () {
   console.log("Сервер ожидает подключения...");
});