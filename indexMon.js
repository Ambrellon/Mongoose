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

    


const moviesSchema = new mongoose.Schema({
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

const childSchema = new mongoose.Schema({/*...*/});
const parentSchema = new mongoose.Schema({
    children: [childSchema]
});


const server = app.listen(27017, () => 
    console.log(`Server started on port ${server.address().port}`));
