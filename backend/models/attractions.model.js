const mongoose = require('mongoose')

const Schema = mongoose.Schema

const attractionSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    website:{
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    location:{
        address: {
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        zipcode:{
            type: String,
            required:true
        }
    },
    indoors:{
        type: Boolean,
        required: true
    },
    familyFriendly:{
        type: Boolean,
        required: true
    }
})

const Attraction = mongoose.model('Attraction', attractionSchema)

module.exports = Attraction