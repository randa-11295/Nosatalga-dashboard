import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";


export default function CheckArea(props) {
  
  const isError = props.formik.errors[props.name] 

  return (
    <FormControl
      error={Boolean(isError) }
      component="fieldset"
      variant="standard"
    >
      <FormLabel component="legend"> {props.name}</FormLabel>
      <FormGroup row name={props.name}>
        {props.data.map((el) => {
          return (
            <FormControlLabel
              name={props.name}
              onChange={props.formik.handleChange}
              key={el.name}
              control={
                <Checkbox
                  checked={props.formik.values[props.name]?.includes(el.name)}
                  value={el.name}
                />
              }
              label={el.label}
            />
          );
        })}
      </FormGroup>
      <FormHelperText>{ isError || " "}</FormHelperText>
      {/* <FormHelperText>You can display an error</FormHelperText> */}
    </FormControl>
  );
}
