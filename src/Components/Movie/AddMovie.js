import Grid from '@mui/material/Grid';
import TextCustomInpute from '../Inputs/TextCustomInput';
import UploadButtons from "../Inputs/UplodeInput";
import ChipsArea from '../Movie/ChipsArea';

export default function BasicGrid() {
  return (
      <Grid  component="form"  container spacing={6}>
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

        <Grid item xs={1.5}>
            <UploadButtons />
        </Grid>
         <Grid item xs={2.5}>
          <p> name of photo</p>
        </Grid> 

        <Grid item xs={1.5}>
            <UploadButtons />
        </Grid>

         <Grid item xs={2.5}>
          <p> name of photo</p>
        </Grid>

        <Grid item xs={4}>
           <TextCustomInpute num={true} label="number of sessions" />
        </Grid>

        <Grid item xs={2}>
          <h3> team work</h3> 
        </Grid>
        <Grid item xs={3}>
            <TextCustomInpute num={true} label="media type" />
        </Grid>
        <Grid item xs={7}>
            <ChipsArea />
        </Grid>
        

      </Grid>
  );
}
