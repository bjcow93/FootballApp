const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    index = require('./routes/index'),
    path = require('path')

app.use('/static', express.static('./public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('port', process.env.PORT || 3000)

app.use('/', index)


app.listen(app.get('port'), () => {
    console.log('Server started at port: ', app.get('port'))
})