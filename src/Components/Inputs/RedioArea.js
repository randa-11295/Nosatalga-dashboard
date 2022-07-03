import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";

export default function RedioArea(props) {
  const isError = Boolean(props.formik.errors[props.name]) && props.formik.touched[props.name];
  return (
    <FormControl
      variant="standard"
      error={isError }
    >
      <FormLabel sx={{ mb: 1 }}> {props.name} </FormLabel>

      <RadioGroup name={props.name} row>
        {props.data?.map((el) => (
          <FormControlLabel
          onChange={props.formik.handleChange}
            key={el.label}
            value={el.val}
            control={
              <Radio
               checked={props.formik.values[props.name] === el.val}
                />
            }
            label={el.label}
            sx={{ mr: 3 }}
          />
        ))}
      </RadioGroup>

      <FormHelperText>{ isError ? props.formik.errors[props.name] : " "}</FormHelperText>
    </FormControl>
  );
}
