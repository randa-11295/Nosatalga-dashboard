import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useState } from 'react';

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
<Box>
<label>
  {props.error[props.name]|| "no"}
  <Input accept="image/*"  onChange={onFileChange}  type="file" />

  <Button variant="outlined" component="span">
    upload  {props.name}  <PhotoCamera />
  </Button>

</label>
<p>{photo}</p>
</Box>
);
}
