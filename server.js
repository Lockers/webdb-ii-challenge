const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json()); 

getAll = () => {
    return db('cars');
}

getById = (id) => {
    return db('cars').where({id})
}

createCar = ({ VIN, Make, Model, Mileage }) => {
    return db('cars').insert({ VIN, Make, Model, Mileage })
}
    

server.get('/cars', (req, res) => {
    getAll()
        .then(response => {
        res.status(200).json(response)
        })
        .catch(error => {
        res.status(500).json({Error: 'Internal Server Error'})
    })
})

server.get('/cars/:id', (req, res) => {
    getById(req.params.id)
        .then(response => {
            res.status(200).json(response)
    })
        .catch(error => {
        res.status(500).json({Error: 'Internal Server Error'})
    })
})



server.post('/cars', (req, res) => {
    console.log(req.body)
    createCar(req.body)
        .then(response => {
        res.status(201).json(response)
        })
        .catch(error => {
        res.status(500).json({Error: 'Internal Server Error'})
    })
})


module.exports = server;