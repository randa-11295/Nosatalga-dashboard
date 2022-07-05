import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import DoneIcon from '@mui/icons-material/Done';

export default function TextFildWithBtn(props) {
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password"> {props.label}</InputLabel>
      <OutlinedInput
        value={!props.disable ? props.formik.values[props.name] : ""}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        error={
          props.formik.touched[props.name] &&
          Boolean(props.formik.errors[props.name]) &&
          !props.disable
        }
   
        name={props.name}
        label={props.label}
        disabled={props.disable || false}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              //   onClick={handleClickShowPassword}
              edge="end"
            >
              <DoneIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
