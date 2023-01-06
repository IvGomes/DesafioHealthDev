import express from 'express';
import { routes } from './routes';



const app = express();


// Middlewares...
app.use(express.json());
app.use(routes);


app.listen(3000, () => console.log("🔥 server is running..."))