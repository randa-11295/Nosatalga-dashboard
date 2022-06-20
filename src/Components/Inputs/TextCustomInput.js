import { TextField } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';

const TextCustomInpute =(props)=>{
    const test = [1 , 2 , 3]
    return (
        <TextField
                fullWidth
                error ={false}
                label={props.label}
                helperText=""
                type={props.num ? "number" : "text"}
                multiline={props.mult }
                minRows={2}
                select ={props.select}
      >
          { props.select ? test.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option}
            </MenuItem> 
            )) : null }
        </TextField>
    )
}

export default  TextCustomInpute
