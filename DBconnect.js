const mongoose = require('mongoose')

const DBconnect = async () => {
    try {
        let result = await mongoose.connect('mongodb+srv://mohamed:mohamed@cluster0.x9nq9.mongodb.net/?retryWrites=true&w=majority');
        console.log('database connected')
    } catch (error) {
        console.log(error)
    }
};

module.exports = DBconnect;