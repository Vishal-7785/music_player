const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 7000;
const db = require('./config/mongoose');
app.use(express.urlencoded());
app.use(cookieParser());
// Set up view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('assets'))

// using express router
app.use('/',require('./routes/index'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in ruuning the server : ${err}`);

    }
    console.log(`Server is running on port: ${port}`);
    
});