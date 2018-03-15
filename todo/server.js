
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var ObjectId = require('mongodb').ObjectID;
const port = process.env.PORT || 8080

var app = express();

mongoose.connect('<Insert your mlabs/mongodb connextion string here>');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

var Todo = mongoose.model('Todo', {
  text: String
});

app.get('/api/todos', (req, res) =>{
  Todo.find((err, todos) => {
    if(err) res.send(err);

    res.json(todos);
  })
})

app.post('/api/todos', (req,res) =>{
  Todo.create({
    text: req.body.text,
    done: 'false'
  }, (err, todo) =>{
    if(err) res.send(err);

    Todo.find((err, todos) => {
      if(err) res.send(err);

      res.json(todos);
    });
  });
});

app.delete('/api/todos/:todo_id', (req,res) =>{
  Todo.remove({
    _id: req.params.todo_id
  }, (err, todo) =>{
    if(err) res.send(err);

    Todo.find((err, todos) => {
      if(err) res.send(err);

      res.json(todos);
    });
  });
});


app.get('*', (req, res) => {
        res.sendFile('todo/public/index.html');
});

app.listen(port);
console.log('Connected');
