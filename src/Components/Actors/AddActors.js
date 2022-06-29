import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextCustomInpute from "../Inputs/TextCustomInput";
import UploadButtons from "../Inputs/UplodeInput";
import LoadBtn from "../Inputs/LoadBtn";
import { useFormik } from "formik";
import Headline from "../Text/Headline";
import { v4 as uuid } from "uuid";
import CheckArea from "../Inputs/CheckArea";
import RedioArea from "../Inputs/RedioArea";
import { addActorShema } from "../../Common/vaildation";

export default function AddActors() {
  const values = {
    name: "",
    gender: "",
    job: [] , 
    photo: {},

  };

  const formik = useFormik({
    initialValues: values,
    validationSchema: addActorShema,
    onSubmit: (values) => {
      console.log("submit ", values);
      formik.resetForm();
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

  const job = [
    { name: "ممثل", label: "actor" ,  },
    { name: "مطرب", label: "singer"  },
    { name: "مخرج", label: "director"},
    { name: "عازف", label: "musician" },
    { name: "ملحن", label: "composer" },
  ];

  const gender= ['male' , 'famale' ]  

  return (
    <Grid
      justifyContent="center"
      component="form"
      onSubmit={formik.handleSubmit}
      container
      columnSpacing={8}
      rowSpacing={3}
    >
      <Grid item xs={12}>
        <Headline text="Add  Actor" />
      </Grid>

      <Grid item xs={4}>
        <TextCustomInpute formik={formik} name="name" label="actor name" />
      </Grid>

      <Grid item xs={4} key={uuid()}>
        <UploadButtons
          formik={formik}
          handleChange={custumHandelChange}
          name="photo"
        />
      </Grid>

      <Grid item xs={8}>
        <RedioArea name='gender' data={gender} formik={formik} />
      </Grid>

      <Grid item xs={8}>
        <CheckArea name='job' data={job} formik={formik} />
      </Grid>

      <Grid
        item
        justifyContent="center"
        xs={8}
        sx={{ textAlign: "right" , mt:4 }}
      >
        <Button
          color="secondary"
          variant="outlined"
          onClick={formik.resetForm}
          sx={{ mr: 3, width: "150px" }}
        >
          clear
        </Button>
        <LoadBtn />
      </Grid>
    </Grid>
  );
}
