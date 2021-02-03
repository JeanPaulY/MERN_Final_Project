//boiler plate for express

const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

app.use(cors());
app.use(bodyparser.json());

let Session = require('./course.model')//imported from course.model.js

mongoose.connect('mongodb+srv://dbJp:Mongodb2017@cluster0.00eef.mongodb.net/dbJp?retryWrites=true&w=majority', {useNewUrlParser: true})
const connection = mongoose.connection;
connection.once('open', function(){
    console.log('MongoDB Database connection established successfully');
})

app.get('/', function(req,res){
    res.send({message: 'Hello World!'})

})

app.post('/createSession', function(req, res){
    //accept a new session
        //how? --> req.body
    //store in the db
        //how? --> .save()

    let exampleSession = {
        name: req.body.name,
        term: req.body.term,
        format: req.body.format,
        length: req.body.length
    };
    console.log(req.body);
    let newSession = newSession(exampleSession);
    newSession.save()
        .then(session => {
            console.log('res: ', session);
            res.json({message:'successful!'})
        })
        .catch(err => {
            console.log('error: ', err);
        })
});

app.get('/retrieveSessions', function(req, res){
    Session.find()
    .then(sessions => {
        res.json(sessions);
    })
})

app.post('/delete', function(req, res){
    Session.findByIdAndRemove(req.body.id)
    .then(delRes =>{
        console.log(delRes);
        res.send({message: 'successful'})
    })
})

app.listen(3000, function(){
    console.log('Listenning to koffi olomide')
})