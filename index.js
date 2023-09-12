const express = require('express');
const app = express();

const port = 8000;

app.get('/' , function(req, res){
    res.send ('<h1> Cool its running');
})

app.listen(port, function(err){
    if(err){
        console.log("Error in running the app.");
        return ;
    }
    console.log("Server is up and running at port ", + port);
});