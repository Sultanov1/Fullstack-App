import express from "express";
import cipherRouter from './routers/cipher';

const app = express();
const port = 8000;

app.use(express.json());
app.use('/', cipherRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})