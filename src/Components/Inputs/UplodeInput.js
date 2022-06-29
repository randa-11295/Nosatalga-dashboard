import { styled } from "@mui/material/styles";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Box";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";

const Input = styled("input")({
  display: "none",
});

export default function UploadButtons(props) {
  const [succsess, setSuccsess] = useState(false);

  const onFileChange = (event) => {
    const value = event.target.files[0];
    props.handleChange(value, props.name);
    setSuccsess(true);
  };

  const error = props.formik.errors[props.name];
  const isError =
    props.formik.touched[props.name] && Boolean(error) && !succsess;

  return (
    <FormControl variant="standard" error={isError}>
      <FormLabel sx={{ ml: 1, mb: 1 }}> Media {props.name} </FormLabel>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <label>
          <Input
            accept="image/*"
            onChange={onFileChange}
            type="file"
            onBlur={props.formik.handleBlur}
          />

          <IconButton
            color={isError ? "error" : "primary"}
            component="span"
            sx={{ mr: 2 }}
          >
            <PhotoCamera />
          </IconButton>
        </label>

        <Typography
          variant="p"
          component="p"
          sx={{ fontSize: ".9rem", color: isError ? "error.main" : "black" }}
        >
          {props.formik.values[props.name]?.name || `add ${props.name} image`}
        </Typography>
      </Box>

      <FormHelperText sx={{ ml: 1 }}>{isError ? error : " "}</FormHelperText>
    </FormControl>
  );
}
