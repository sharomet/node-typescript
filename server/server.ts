import config from './config/config';
import app from './app';


app.listen(config.serverPort, () => {
    console.log(`Listening at http://localhost:${config.serverPort}/`);
});