import express from "express";
import codingRouter from './routers/coding';

const app = express();
const port = 8000;

app.use(express.json());
app.use('/coding', codingRouter);

app.listen(port, () => {
  console.log('Server running on port', port);
});