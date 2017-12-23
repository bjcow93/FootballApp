const express = require('express'),
    app = express(),
    bodyParser = require('body-parser')

app.use('/static', express.static('./public'))

app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port', () => {
    console.log('Server started at port: ', app.get('port'))
}))