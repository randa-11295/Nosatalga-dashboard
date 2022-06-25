import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextCustomInpute from "../Inputs/TextCustomInput";
import UploadButtons from "../Inputs/UplodeInput";
import ChipsArea from "../Movie/ChipsArea";
import LoadBtn from "../Inputs/LoadBtn";
import { useFormik } from "formik";
import CheckArea from "../Inputs/checkArea";
import { addMovieShema } from "../../Common/vaildation";
import Headline from "../Text/Headline";
import { v4 as uuid } from "uuid";

export default function BasicGrid() {
  const values = {
    name: "",
    type: "",
    description: "",
    date: "",
    mediaId: "",
    bannar: {},
    cover: {},
  }

  const formik = useFormik({
    initialValues:values , 
    // validationSchema: addMovieShema,
    onSubmit: (values) => {
      console.log("submit ", values);
      formik.resetForm()
      
    },
  });
 
 
  const custumHandelChange = (val, key) => {
    formik.values[key] = val;
  };
 

  const textInput = [
    { name: "name", label: "Media Name", size: 4 },
    { name: "date", label: "Media Date", size: 4, num: true },
    { name: "mediaId", label: "Media Id", size: 4 },
    { name: "description", label: "Media Description", size: 12, mult: true },
  ];
  const imgInput = ["bannar", "cover"];

  const repeatTextInput = () =>
    textInput.map((el) => (
      <Grid key={el.name} item xs={el.size}>
        <TextCustomInpute
          formik={formik}
          num={el.num}
          name={el.name}
          label={el.label}
          mult={el.mult}
        />
      </Grid>
    ));

 const imgRepeat=()=>(  imgInput.map((el) => (
        <Grid item xs={4} key={uuid()}>
          <UploadButtons
            formik={formik}
            handleChange={custumHandelChange}
            name={el}
          />
        </Grid>
      )))


  return (
    <Grid
      component="form"
      onSubmit={formik.handleSubmit}
      container
      columnSpacing={4}
      rowSpacing={3}
    >
      <Grid item xs={12}>
        <Headline />
      </Grid>

      {repeatTextInput()}


      <Grid item xs={4}>
        <CheckArea formik={formik} name="type" />
      </Grid>

      {imgRepeat()}

      <Grid  item xs={4}>
        <TextCustomInpute
          formik={formik}
          name='teamWork'
          label='Team Work'
          select={true}
        />
      </Grid>

      <Grid item xs={8}>
        <ChipsArea />
      </Grid>

      <Grid item xs={12} sx={{display : "flex" , justifyContent : "flex-end"  , mt :4}}>
        <Button   color="secondary" variant="outlined"  onClick={formik.resetForm} sx={{mr : 3 , width : "150px"}} >  clear </Button>
        <LoadBtn /> 
      </Grid>
    </Grid>
  );
}
