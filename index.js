const csvtojson = require('csvtojson');
const { json } = require('express');
const cvfile = "classes.csv";

const axios = require('axios');

csvtojson().fromFile(cvfile).then((json) => {
    json.forEach((item) => {
        axios.post("http://127.0.0.1:8000/api/v1/classes",  item );
    });
});