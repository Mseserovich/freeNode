let express = require('express');
let socket = require('socket.io');
let app = express();
app.get('/Home', function(req, res){
    res.render('home.ejs');
});

app.listen(5000, function(){
    console.log('Server has started');
});