import Grid from '@mui/material/Grid';
import TextCustomInpute from '../Inputs/TextCustomInput';
import UploadButtons from "../Inputs/UplodeInput";
import ChipsArea from '../Movie/ChipsArea';
import LoadBtn from '../Inputs/LoadBtn';
import { useFormik } from 'formik';

export default function BasicGrid() {

const formik = useFormik({
initialValues: {
  name: 'ss',

},
onSubmit: values => {
  console.log(values,);
},
});

return (
<Grid  component="form" onSubmit={formik.handleSubmit} container spacing={6}>
    <Grid item xs={4}>
        <TextCustomInpute  handleChange={formik.handleChange}  name="name"  label="Media Name" />
    </Grid>

    <Grid item xs={4}>
        <TextCustomInpute handleChange={formik.handleChange}  name="date"  num={true} label="date" />
    </Grid>

    <Grid item xs={4}>
        <TextCustomInpute handleChange={formik.handleChange}  name="team"   select={true} label="Media Type" />
    </Grid>

    <Grid item xs={12}>
        <TextCustomInpute handleChange={formik.handleChange}  name="description"  mult={true} label="media description" />
    </Grid>

    <Grid item xs={1.5}>
        <UploadButtons  handleChange={formik.handleChange}  name="bannar" />
    </Grid>

    <Grid item xs={2.5}>
      <p> name of photo</p>
    </Grid> 

    <Grid item xs={1.5}>
       <UploadButtons  handleChange={formik.handleChange}  name="cover" />
    </Grid>

    <Grid item xs={2.5}>
      <p> name of photo</p>
    </Grid>

    <Grid item xs={4}>
      <TextCustomInpute handleChange={formik.handleChange}  name="mediaId"   num={true} label="media Id" />
    </Grid>

    <Grid item xs={2}>
      <h3> team work</h3> 
    </Grid>

    <Grid item xs={7}>
        <ChipsArea />
    </Grid>
    <Grid item xs={12}>
        <LoadBtn  />
    </Grid>
    
  </Grid>
);
}
