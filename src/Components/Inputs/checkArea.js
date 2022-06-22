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

<FormControl   variant="standard"  error={ Boolean(props.formik.errors[props.name])}   >


<RadioGroup     name={props.name}  row   onChange={props.formik.handleChange}   >
    <FormControlLabel color="error.main" value="movie" control={<Radio />} label="Movie" sx={{ mr: 6}} />
    <FormControlLabel color="error.main" value="song"  control={<Radio />} label="Song" />
</RadioGroup>

<FormHelperText>{props.formik.errors[props.name] || " "}</FormHelperText>

</FormControl>
  );
}
