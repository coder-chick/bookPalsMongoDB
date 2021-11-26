const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const router = express.Router();
const app = express();
const url = require('./secret.js');

app.use(bodyParser.json());

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


client.connect(err => {
    const myDB = client.db('bookpalsDB').collection('User');

    app.get('/user/:user_name',(req,res)=>{
        console.log(req.params);
        myDB.find(req.params).toArray().then(results => {
        console.log(results);
        res.contentType('application/json');
        res.send(JSON.stringify(results))
        })
    })

    app.route('/users')
        .get((req, res) => {
            myDB.find().toArray().then(results => {
                console.log(results);
                res.contentType('application/json');
                res.send(JSON.stringify(results))
            })
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
            console.log(req.body);
            myDB.findOneAndUpdate(
                {_id: ObjectId(req.body._id)}, 
                {$set: {user_name: req.body.user_name}},
                {upsert: false})
           

            myDB.findOneAndUpdate(
                {_id: ObjectId(req.body._id)}, 
                {$set: {email: req.body.email}}, 
                {upsert: false})


            myDB.findOneAndUpdate(
                {_id: ObjectId(req.body._id)}, 
                {$set: {city: req.body.city}}, 
                {upsert: false})

            myDB.findOneAndUpdate(
                {_id: ObjectId(req.body._id)}, 
                {$set: {state: req.body.state}}, 
                {upsert: false})

                .then(result => 
                    {
                        res.contentType('application/json');
                        res.send({
                            "status": true
                        })
                    })  
                   
                    
            })

        .delete((req, res) => {
            console.log(req.body);
            myDB.deleteOne({
                _id: ObjectId(req.body._id)
            }).then(result => {
                let boo = true;
                if (result.deleteCount === 0) {
                    boo: false
                }
                res.send({
                    "status": boo
                })
            })
            .catch(error => console.log(error))
        })



    const bookDB = client.db('bookpalsDB').collection('Book');

    app.get('/book/:book_title',(req,res)=>{
        console.log(req.params);
        bookDB.find(req.params).toArray().then(results => {
        console.log(results);
        res.contentType('application/json');
        res.send(JSON.stringify(results))
        })
    })

    app.route('/books')
        .get((req, res) => {
            bookDB.find().toArray().then(results => {
                console.log(results);
                res.contentType('application/json');
                res.send(JSON.stringify(results))
            })
        })
        .post((req, res) => {
            console.log(req.body);
            bookDB.insertOne(req.body).then(results => {
                console.log(req.body);
                res.contentType('application/json');
                res.send(JSON.stringify(req.body))
            })
        })
        .put((req, res) => {
            console.log(req.body);
            bookDB.findOneAndUpdate(
                {_id: ObjectId(req.body._id)}, 
                {$set: {book_title: req.body.book_title}},
                {upsert: false})
           

            bookDB.findOneAndUpdate(
                {_id: ObjectId(req.body._id)}, 
                {$set: {isbn: req.body.isbn}}, 
                {upsert: false})


            bookDB.findOneAndUpdate(
                {_id: ObjectId(req.body._id)}, 
                {$set: {book_genre: req.body.book_genre}}, 
                {upsert: false})

            bookDB.findOneAndUpdate(
                {_id: ObjectId(req.body._id)}, 
                {$set: {book_length: req.body.book_length}}, 
                {upsert: false})

                .then(result => 
                    {
                        res.contentType('application/json');
                        res.send({
                            "status": true
                        })
                    })  
                   
                    
            })

        .delete((req, res) => {
            console.log(req.body);
            bookDB.deleteOne({
                _id: ObjectId(req.body._id)
            }).then(result => {
                let boo = true;
                if (result.deleteCount === 0) {
                    boo: false
                }
                res.send({
                    "status": boo
                })
            })
            .catch(error => console.log(error))
        })


            
    })
    
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
    })
app.listen(8080,()=>{
    console.log('server ready');
    })
