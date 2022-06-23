import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { v4 as uuidv4 } from "uuid";

const SelectInput = (props) => {
  const optionsReapet = () => {
    if (props.select) {
      return test.map((option) => (
        <MenuItem key={uuidv4()} value={option.value}>
          {option}
        </MenuItem>
      ));
    }
  };

  const test = [1, 2, 3];
  return (
    <TextField
      fullWidth
      value={props.formik.values[props.name]}
      onChange={props.formik.handleChange}
      // onBlur={props.formik.handleBlur}
      // error={props.formik.touched[props.name] && Boolean(props.formik.errors[props.name])}
      // helperText={(props.formik.touched[props.name] && props.formik.errors[props.name]) || " "}
      name={props.name}
      label={props.label}
      select={props.select}
    >
      {optionsReapet()}
    </TextField>
  );
};

export default SelectInput;
