import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Input = styled('input')({
  display: 'none',
});

export default function UploadButtons(props) {



const onFileChange = event => {
    
 
const value = event.target.files[0] ;

 props.handleChange( value , props.name );  

};



return (
<label>

  <Input accept="image/*"  onChange={onFileChange}  type="file" />

  <Button variant="outlined" component="span">
    upload  {props.name}  <PhotoCamera />
  </Button>

</label>

);
}
