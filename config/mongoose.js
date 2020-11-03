const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/music_player_db');
// Acquiring the connection to check if it is successful
const db = mongoose.connection;
// On error
db.on('error',console.error.bind(console,'Error connecting to db'));
// If up and running then print the message
db.once('open',function(){
    console.log('successfully connected to database');
});

module.exports = db;