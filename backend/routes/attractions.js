const router = require('express').Router()

let Attraction = require('../models/attractions.model')

router.route('/').get((req,res)=>{
    Attraction.find()
    .then(attractions=>
        res.json(attractions))
        .catch((err)=>{
        res.status(400).json("Error: " + err)
    })
})

router.route('/:id').get((req,res)=>{
    Exercise.findById(req.params.id)
    .then((exercise)=>{
        res.json(exercise)
    }).catch((err)=>{
        res.status(400).json('Error: ' + err)
    })
})




module.exports = router;