import express from 'express';
import router from './router';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'success' })
});


app.use("/api", router);



export default app;