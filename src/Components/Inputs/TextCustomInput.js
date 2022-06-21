import { TextField } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";

const TextCustomInpute =(props)=>{
  useEffect(()=>{
    console.log(props.formik)
  },[props.formik])

    const test = [1 , 2 , 3]
    return (
        <TextField
                fullWidth
                onChange={props.formik.handleChange}
                onBlur={props.formik.handleBlur}
                error={props.formik.touched[props.name] && Boolean(props.formik.errors[props.name])}
                helperText={(props.formik.touched[props.name] && props.formik.errors[props.name]) || " "}
                name={props.name}
                value={props.formik.values[props.name]}
                label={props.label}
                type={props.num ? "number" : "text"}
                multiline={props.mult }
                minRows={3}
                select ={props.select}
      >
          { props.select ? test.map((option) => (
            <MenuItem key={uuidv4()} value={option.value}>
              {option}
            </MenuItem> 
            )) : null }
        </TextField>
    )
}

export default  TextCustomInpute
