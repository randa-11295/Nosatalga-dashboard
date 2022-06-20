import Grid from '@mui/material/Grid';
import TextCustomInpute from '../Inputs/TextCustomInput';
import UploadButtons from "../Inputs/UplodeInput";

export default function BasicGrid() {
  return (
      <Grid  component="form"  container spacing={3}>
        <Grid item xs={4}>
           <TextCustomInpute label="Media Name" />
        </Grid>

        <Grid item xs={4}>
           <TextCustomInpute num={true} label="date" />
        </Grid>

        <Grid item xs={4}>
           <TextCustomInpute select={true} label="Media Type" />
        </Grid>

        <Grid item xs={12}>
            <TextCustomInpute mult={true} label="media type" />
        </Grid>

        <Grid item xs={2}>
            <UploadButtons />
        </Grid>
         <Grid item xs={4}>
          <p> name of photo</p>
        </Grid> 

        <Grid item xs={2}>
            <UploadButtons />
        </Grid>
         <Grid item xs={4}>
          <p> name of photo</p>
        </Grid> 
        <Grid item xs={8}>
           movie id 
        </Grid>
      </Grid>
  );
}
