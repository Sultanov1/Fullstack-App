import { Box, TextField, IconButton } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

const VigenereCipher = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
      <TextField
        label="Decoded message"
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Password"
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Box display="flex" justifyContent="center" mt={2}>
        <IconButton color="primary">
          <ArrowDownward/>
        </IconButton>
        <IconButton color="primary">
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
      />
    </Box>
  )
}
export default VigenereCipher;