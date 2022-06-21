import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

export default function CheckArea(props) {

// const [error, setError] = React.useState(false);

// const [helperText, setHelperText] = React.useState('Choose wisely');

return (

<FormControl   variant="standard">
{/* error={error} */}

<RadioGroup  name="type" row  onChange={props.handleChange}>
    <FormControlLabel  sx={{ mr: 6 }}   value="movie" control={<Radio />} label="Movie" />
    <FormControlLabel  value="song"  control={<Radio />} label="Song" />
</RadioGroup>

<FormHelperText>{""}</FormHelperText>

</FormControl>
  );
}
