import Grid from '@mui/material/Grid';
import TextCustomInpute from '../Inputs/TextCustomInput';
import UploadButtons from "../Inputs/UplodeInput";
import ChipsArea from '../Movie/ChipsArea';
import LoadBtn from '../Inputs/LoadBtn';
import { useFormik } from 'formik';
import CheckArea from '../Inputs/checkArea';

export default function BasicGrid() {

const formik = useFormik({
initialValues: {
  name: 'ss',
  bannar : {}

},
onSubmit: values => {
  console.log(values,);
},
});

const custumHandelChange =(val , key)=>{
   formik.values[key] = val
console.log(formik.values)
}

return (
<Grid  component="form" onSubmit={formik.handleSubmit} container spacing={6}>
    <Grid item xs={4}>
        <TextCustomInpute  handleChange={formik.handleChange}  name="name"  label="Media Name" />
    </Grid>

    <Grid item xs={4}>
        <TextCustomInpute handleChange={formik.handleChange}  name="date"  num={true} label="date" />
    </Grid>

    <Grid item xs={4}>
       <TextCustomInpute handleChange={formik.handleChange}  name="mediaId"   num={true} label="media Id" />
    </Grid>

    <Grid item xs={12}>
        <TextCustomInpute handleChange={formik.handleChange}  name="description"  mult={true} label="media description" />
    </Grid>

    <Grid item xs={3}>
       <h4> type media </h4>
    </Grid>
    <Grid item xs={9}>
       <CheckArea handleChange={formik.handleChange}  />
    </Grid>

    <Grid item xs={3}>
        <UploadButtons  handleChange={custumHandelChange}  name="bannar" />
    </Grid>
    <Grid item xs={3}>
        <UploadButtons  handleChange={formik.handleChange}  name="bannar" />
    </Grid>

    <Grid item xs={3}>
        <UploadButtons  handleChange={formik.handleChange}  name="bannar" />
    </Grid>

    <Grid item xs={3}>
      <p> name of photo</p>
    </Grid> 

    <Grid item xs={3}>
       <UploadButtons  handleChange={formik.handleChange}  name="cover" />
    </Grid>

    <Grid item xs={3}>
      <p> name of photo</p>
    </Grid>

    <Grid item xs={4}>
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
