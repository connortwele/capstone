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
    Attraction.findById(req.params.id)
    .then((exercise)=>{
        res.json(exercise)
    }).catch((err)=>{
        res.status(400).json('Error: ' + err)
    })
})

router.route('/add').post((req,res)=>{
            const name = req.body.name
            const description = req.body.description
            const website = req.body.website
            const imageURL = req.body.imageURL
            const address = req.body.location.address
            const city = req.body.location.city
            const state = req.body.location.state
            const zipcode = req.body.location.zipcode
            const indoors = req.body.indoors
            const kidFriendly = req.body.kidFriendly

            const newAttraction = new Attraction ({
                name,
                description,
                website,
                imageURL,
                location:{
                address,
                city,
                state,
                zipcode
                },
                indoors,
                kidFriendly
            })
            newAttraction.save()
            .then(()=>{
                res.json('Attraction Added')
            })
                .catch((err)=>{
                    res.status(400).json("Error: " + err)
                })
})




module.exports = router;