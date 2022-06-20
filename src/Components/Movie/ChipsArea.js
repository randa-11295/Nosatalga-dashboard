import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ChipsArea() {


  return (
    <Stack direction="row" spacing={1}>
        <Chip  color="primary"
        label="Custom delete icon"
        onClick={"handleClick"}
        onDelete={'handleDelete'}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
        <Chip label="Deletable" variant="outlined"   deleteIcon={<DeleteIcon />} />
        <Chip label="Deletable" variant="outlined"   deleteIcon={<DeleteIcon />} />
        <Chip label="Deletable" variant="outlined"   deleteIcon={<DeleteIcon />} />
        <Chip label="Deletable" variant="outlined"   deleteIcon={<DeleteIcon />}  />
    </Stack>
  );
}