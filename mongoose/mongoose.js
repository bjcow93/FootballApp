const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
};


mongoose.connect('mongodb://127.0.0.1:27017/portfolio', options)
.then(
    () => {console.log('DB Connected')},
    err => {console.log(err)}
);

const BioData = new Schema({
    name: String,
    email: String
});

const Data = mongoose.model('Data', BioData);
module.exports = Data;