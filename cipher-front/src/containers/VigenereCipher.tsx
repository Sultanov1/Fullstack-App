import { Box, TextField, IconButton } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import {useAppDispatch} from '../app/hooks';
import React, {useState} from 'react';
import {decodeMessage, encodeMessage} from './cipherThunk';


const VigenereCipher: React.FC = () => {
  const dispatch = useAppDispatch();
  const [encodedMessage, setEncodedMessage] = useState<string>('');
  const [decodedMessage, setDecodedMessage] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEncode = () => {
    dispatch(encodeMessage({password, message: encodedMessage}));
  }

  const handleDecode = () => {
    dispatch(decodeMessage({password, message: decodedMessage}));
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
      <TextField
        label="Decoded message"
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        margin="normal"
        value={decodedMessage}
        onChange={(e) => setDecodedMessage(e.target.value)}
      />
      <TextField
        label="Password"
        fullWidth
        variant="outlined"
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Box display="flex" justifyContent="center" mt={2}>
        <IconButton color="primary" onClick={handleEncode} disabled={!password}>
          <ArrowDownward/>
        </IconButton>
        <IconButton color="primary" onClick={handleDecode} disabled={!password}>
          <ArrowUpward/>
        </IconButton>
      </Box>
      <TextField
        label="Encoded message"
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        margin="normal"
        value={encodedMessage}
        onChange={(e) => setEncodedMessage(e.target.value)}
      />
    </Box>
  )
}
export default VigenereCipher;