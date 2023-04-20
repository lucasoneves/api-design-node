import express from 'express';
import router from './router';
import morgan from 'morgan';
import { protect } from './modules/auth';
import { signUp, signIn } from './handlers/user';

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", protect, router);

app.post('/signup', signUp)
app.post('/signin', signIn)


export default app;