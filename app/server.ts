import app from './app';

const port: any = process.env.PORT || 3000;

/*const app: express.Application = express();

const port: any = process.env.PORT || 3000;

app.use('/api', Router);

//app.use('/welcome', WelcomeController);
*/

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});