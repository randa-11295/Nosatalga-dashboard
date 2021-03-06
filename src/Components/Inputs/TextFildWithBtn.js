import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import DoneIcon from "@mui/icons-material/Done";

export default function TextFildWithBtn(props) {
  const isError =
  (  Boolean(props.formik.errors[props.name]) &&
    props.formik.touched[props.name]) ||
  (  Boolean(props.parentFormik.errors.cast) &&
    props.parentFormik.touched[props.name]) 

  const texthelp = () => {
    if (isError) {
      return props.formik.errors[props.name] || props.parentFormik.errors.cast ;
    } else if (props.loading) {
      return "Loading ...";
    } else {
      return " ";
    }
  };
  return (
    <FormControl error={isError} sx={{ width: "100%" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">
        {props.label}
      </InputLabel>
      <OutlinedInput
        value={props.formik.values[props.name] || ""}
        onChange={props.formik.handleChange}
        
        error={
          props.formik.touched[props.name] &&
          Boolean(props.formik.errors[props.name]) &&
          !props.disable
        }
        name={props.name}
        label={props.label}
        disabled={props.loading || false}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={props.fun}
              edge="end"
            >
              <DoneIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText>{texthelp()}</FormHelperText>
    </FormControl>
  );
}
