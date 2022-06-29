import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckArea(props) {
  return (
    <FormControl
      // error={error}
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
      {/* <FormHelperText>You can display an error</FormHelperText> */}
    </FormControl>
  );
}
