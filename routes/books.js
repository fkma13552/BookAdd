import {v4} from "uuid";

var express = require('express');
var router = express.Router();
const fs = require('fs');
const datapath = './data/books.json';

const readFile = (path) => {
    const data = fs.readFileSync(path);
    return JSON.parse(data);
}

const writeFile = (path, data) => {
    const stringify = JSON.stringify(data);
    fs.writeFileSync(path, stringify);
}

/* GET books listing. */
router.get('/', function(req, res, next) {
    const data = readFile(datapath);
    res.json(data);
});

/* POST book */
router.post('/', function( req, res){
    let data = readFile(datapath);
    let objToPush = req.body;
    objToPush.id = v4();
    data.push(objToPush);
    writeFile(datapath, data);
});

/*UPDATE book*/
router.patch('/:id', function (req, res) {
    let data = readFile(datapath);
    let id = req.params.id;
    let objToChange = req.body;
    let updateUser = data.filter(book => book.id !== id);
    updateUser.push(objToChange);
    writeFile(datapath, updateUser);
})

/* DELETE book*/
router.delete('/:id', function (req, res) {
    let data = readFile(datapath);
    let id = req.params.id;
    let deleteUser = data.filter(book => book.id !== id);
    writeFile(datapath, deleteUser);
})
module.exports = router;
