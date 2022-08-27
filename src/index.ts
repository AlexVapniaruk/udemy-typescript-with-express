import { router } from './loginRoutes';
import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({keys: ['daslkdaslfj']}));
app.use(router);

app.listen(3000, () => {
    console.log('Listening on port 3000')
})