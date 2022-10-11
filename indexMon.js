'use strict'

const express = require('express');
const app = express();
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/films',
    function (err) {
        if (err) {
        'Errored'
        } else (console.log("Connection Successful"));
    });

const moviesChildSchema = new mongoose.Schema({ 
        review: String, 
        leadActor: String
});  


const moviesSchema = new mongoose.Schema({
    children: [moviesChildSchema],
    genre: {
        type: String,
        require: true
    },
    descripion: String,
    year: String,
    title: {
        type: String,
        require: true
    }
});



const server = app.listen(27017, () => 
    console.log(`Server started on port ${server.address().port}`));
