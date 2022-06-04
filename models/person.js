const mongoose = require('mongoose')
const schema = mongoose.Schema;

const personSchema = new schema({
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    favoriteFoods: {
        type: [String]
    }
});

const person = mongoose.model('person', personSchema);

module.exports = person;