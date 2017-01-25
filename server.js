import express from 'express';
import devServer from './dev-server';
let app = express();
let port = process.env.PORT || 3000;

if (process.env.ENV !== 'production') {
    devServer(app);
}

app.use('/', express.static(__dirname + '/dist'));

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('localhost:', port);   
    }
})