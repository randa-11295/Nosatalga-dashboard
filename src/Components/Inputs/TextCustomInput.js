import { TextField } from "@mui/material"


const TextCustomInpute =(props)=>{


return (

<TextField fullWidth
        value={props.formik.values[props.name]}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        error={props.formik.touched[props.name] && Boolean(props.formik.errors[props.name])}
        helperText={(props.formik.touched[props.name] && props.formik.errors[props.name]) || " "}
        name={props.name}
        label={props.label}
        type={props.num ? "number" : "text"}
        multiline={props.mult || false }
        minRows={3}
/>

)
}

export default  TextCustomInpute
