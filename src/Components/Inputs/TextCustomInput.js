import { TextField } from "@mui/material";

const TextCustomInpute = (props) => {
  return (
    <TextField
      fullWidth
      value={!props.disable ? props.formik.values[props.name] : ""}
      onChange={props.formik.handleChange}
      onBlur={props.formik.handleBlur}
      error={
        props.formik.touched[props.name] &&
        Boolean(props.formik.errors[props.name]) &&
        !props.disable
      }
      helperText={
        !props.disable
          ? (props.formik.touched[props.name] &&
              props.formik.errors[props.name]) ||
            " "
          : " "
      }
      name={props.name}
      label={props.label}
      disabled={props.disable || false}
      type={props.num ? "number" : "text"}
      multiline={props.mult || false}
      minRows={3}
  
    />
  );
};

export default TextCustomInpute;
