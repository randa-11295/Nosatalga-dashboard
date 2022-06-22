import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Box';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';


const Input = styled('input')({
  display: 'none',
});

export default function UploadButtons(props) {

const [photo , setPhoto] = useState(`add ${props.name} image`);

const onFileChange = event => {
    
  const value = event.target.files[0] ;
  props.handleChange( value , props.name );  
  setPhoto(value.name)
};



return (
<FormControl   variant="standard"  error={! true }   >
<FormLabel sx= {{ml : 1 , mb:1}} > Media {props.name} </FormLabel>
<Box sx={{display : "flex" , alignItems : "center"}}>

    <label>
     
      <Input accept="image/*"  onChange={onFileChange}  type="file"  />

      <Button   component="span" sx= {{ mr: 4 , textTransform: 'capitalize',  }}>
           <PhotoCamera sx= {{ mr: 1  }} /> upload
      </Button>
    </label>

    <Typography variant="p" component="p" sx= {{fontSize : ".9rem"}}   >      
             {photo}
    </Typography>
</Box>
<FormHelperText sx= {{ml : 1 }}>{"test" || " "}</FormHelperText>


</FormControl>
);
}
