import {LoadingButton} from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import {useState} from 'react';


export default function LoadingButtonsTransition() {
const [loading, setLoading] = useState(false);

const  handleClick = () => {
    setLoading(true);
}

return (
<LoadingButton
  sx={{width :  "150px"}}
  color="secondary"
  // onClick={handleClick}
  loading={loading}
  loadingPosition="start"
  startIcon={<SaveIcon />}
  variant="contained"
  type='submit'
>
  submit
</LoadingButton>

);
}
