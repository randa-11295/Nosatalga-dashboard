import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextCustomInpute from "../Inputs/TextCustomInput";
import LoadBtn from "../Inputs/LoadBtn";
import { useFormik } from "formik";
import Headline from "../Text/Headline";
import RedioArea from "../Inputs/RedioArea";
import { addActorShema } from "../../Common/vaildation";

export default function AddActors() {
  const values = {
    name: "",
    isMale : false ,
    type: "",
    from : "" ,
    to : "" , 
    image: "",
  };

  const formik = useFormik({
    initialValues: values,
    // validationSchema: addActorShema,
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

  // const job = [
  //   { name: "ممثل", label: "actor" ,  },
  //   { name: "مطرب", label: "singer"  },
  //   { name: "مخرج", label: "director"},
  //   { name: "عازف", label: "musician" },
  //   { name: "ملحن", label: "composer" },
  // ];

  const job = [{ val : "actor" , label :"ACTOR"} ,{ val : "COMPOSER" , label : "COMPOSER"}];
  const gender = [{ val : false , label : "male" } ,{val : true , label : "famale "}];

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

      <Grid item xs={6}>
        <TextCustomInpute formik={formik} name="name" label="actor name" />
      </Grid>
      <Grid item xs={6}>
        <TextCustomInpute formik={formik} name="image" label="actor image" />
      </Grid>

      <Grid item xs={3}>
        <TextCustomInpute formik={formik} num={true} name="from" label="from" />
      </Grid>
      <Grid item xs={3}>
        <TextCustomInpute formik={formik}  num={true} name="to" label="to" />
      </Grid>
      <Grid item xs={3}>
        {/* <TextCustomInpute formik={formik} name="to" label="to" /> */}
      </Grid>



      <Grid item xs={12}>
        <RedioArea name="type" data={job} formik={formik} />
      </Grid>
      <Grid item xs={12}>
        <RedioArea name="isMale" data={gender} formik={formik} />
      </Grid>

      <Grid
        item
        justifyContent="center"
        xs={8}
        sx={{ textAlign: "right", mt: 4 }}
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
