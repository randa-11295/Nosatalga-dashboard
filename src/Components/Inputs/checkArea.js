import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

export default function CheckArea(props) {

const touch = props.formik.touched[props.name] 

return (

<FormControl   variant="standard"  error={touch &&  Boolean(props.formik.errors[props.name]) }  >


<FormLabel sx= {{ mb:1}} > Media {props.name} </FormLabel>

<RadioGroup  name={props.name}  row  onChange={props.formik.handleChange} >
    <FormControlLabel value="movie" control={<Radio />} label="Movie" sx={{ mr: 6}}  />
    <FormControlLabel value="song"  control={<Radio />} label="Song" />
</RadioGroup>

<FormHelperText>
  {props.formik.errors[props.name] || " "}
</FormHelperText>


</FormControl>
  );
}
