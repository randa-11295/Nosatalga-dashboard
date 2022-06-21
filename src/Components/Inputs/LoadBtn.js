import {LoadingButton} from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import {useState} from 'react';


export default function LoadingButtonsTransition() {
const [loading, setLoading] = useState(true);

const  handleClick = () => {
    setLoading(true);
}

return (
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

);
}
