let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'))

app.get('/Home', function(req, res){
    res.render('Home.ejs');
});

app.get('/Game', (req, res)=>{
    res.render('GamePage')
})

app.get('/Profile', (req, res)=>{
    res.render('Profile')
})

app.listen('5000', function(){
    console.log('Server has started');
});