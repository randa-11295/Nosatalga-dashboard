import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Input = styled('input')({
  display: 'none',
});

export default function UploadButtons(props) {
  return (
      <label htmlFor="contained-button-file">

        <Input accept="image/*" name={props.name} onChange={props.handleChange}  id="contained-button-file" multiple type="file" />

        <Button variant="outLine" component="span">
          upload  {props.name}  <PhotoCamera />
        </Button>

      </label>
      
  );
}
