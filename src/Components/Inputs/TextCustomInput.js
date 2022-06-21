import { TextField } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import { v4 as uuidv4 } from 'uuid';

const TextCustomInpute =(props)=>{
    const test = [1 , 2 , 3]
    return (
        <TextField
                fullWidth
                onChange={props.handleChange}
                name={props.name}
                error ={false}
                label={props.label}
                helperText=""
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
