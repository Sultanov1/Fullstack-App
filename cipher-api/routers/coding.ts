import {vigenereCipher} from "./vigenereCipher";
import express from 'express';

const codingRouter = express.Router();

codingRouter.post('/encode', (req, res) => {
  const {password, message} = req.body;
  if (!password || !message) {
    return res.status(400).send({error: "send password and message"});
  }

  const encodedMessage = vigenereCipher(message, password, true);
  res.send(encodedMessage);
});


codingRouter.post('/decode', (req, res) => {
  const {password, message} = req.body;
  if (!password || !message) {
    return res.status(400).send({error: "send password and message"});
  }

  const decodeMessage = vigenereCipher(message, password, false);
  res.send(decodeMessage);
})



export default codingRouter;