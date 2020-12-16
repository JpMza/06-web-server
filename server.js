const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers/helper')

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

//expres hbs engine
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

  res.render('home',{nombre: 'jp mendoza'});

})

app.get('/about', (req, res) => {

  res.render('about')

})


app.listen(port, () => {
  console.log(`escuchando peticiones en el puerto ${port}`);
})