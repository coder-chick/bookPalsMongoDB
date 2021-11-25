const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const router = express.Router();
const app = express();
const url = require('./secret.js');

app.use(bodyParser.json());
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// MongoClient.connect(url,(err,db)=>{
//     if(err) throw err;
//     console.log('Connected');
//     db.close();
//     })

        client.connect(err => {
            const myDB = client.db('bookpalsDB').collection('User');
            app.route('/users')
            .get((req, res) => {
            })
            .post((req, res) => {
                console.log(req.body);
                myDB.insertOne(req.body).then(results => {
                    console.log(req.body);
                    res.contentType('application/json');
                    res.send(JSON.stringify(req.body))
                })
            })
            .put((req, res) => {
            })
            .delete((req, res) => {
            })
        })

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
    })
app.listen(8080,()=>{
    console.log('server ready');
    })