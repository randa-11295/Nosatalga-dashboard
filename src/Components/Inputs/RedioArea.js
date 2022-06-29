import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";

export default function RedioArea(props) {
  const touch = props.formik.touched[props.name];

  return (
    <FormControl
      variant="standard"
      error={touch && Boolean(props.formik.errors[props.name])}
    >
      <FormLabel sx={{ mb: 1 }}> {props.name} </FormLabel>

      <RadioGroup name={props.name} row>
        {props.data?.map((el) => (
          <FormControlLabel
          onChange={props.formik.handleChange}
            key={el}
            value={el}
            control={
              <Radio
               checked={props.formik.values[props.name] === el}
                />
            }
            label={el}
            sx={{ mr: 3 }}
          />
        ))}
      </RadioGroup>

      <FormHelperText>{props.formik.errors[props.name] || " "}</FormHelperText>
    </FormControl>
  );
}
