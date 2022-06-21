import {LoadingButton} from '@mui/lab';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import {useState} from 'react';


export default function LoadingButtonsTransition() {
  const [loading, setLoading] = useState(true);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      <FormControlLabel
        sx={{
          display: 'block',
        }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      />
    

      
        <LoadingButton
          color="secondary"
          onClick={handleClick}
        //   loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          type='submit'
        >
          Save
        </LoadingButton>
    </Box>
  );
}
