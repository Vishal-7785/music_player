const express = require('express');
const app = express();
const port = 7000;
// Set up view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('assets'))
app.use(express.urlencoded());
// using express router
app.use('/',require('./routes/index'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in ruuning the server : ${err}`);

    }
    console.log(`Server is running on port: ${port}`);
    
});