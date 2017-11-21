var express = require('express');
var app = express();

app.get('/items', function(request, response){
    response.send('This function will return a list of items');
});

/* app.post('/item', function(request, response){
    response.send('New item added!');
});

app.put('/item', function(request, response){
    response.send('Item modified !');
});

app.delete('/item', function(request, response){
    response.send('Item deleted !');
}); */

app.listen(3000, function(){
    console.log('Server is listening on port 3000');
});