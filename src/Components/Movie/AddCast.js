import ChipsArea from "../Movie/ChipsArea";
import Grid from "@mui/material/Grid";
import TextFildWithBtn from "../Inputs/TextFildWithBtn";
import { useFormik } from "formik";
import { useQuery } from "@apollo/client";
import { getActorData } from "../../ApolloClint/mediaQuieries";
const AddCast = () => {
  const values = {
    cast: "ttt",
  };

  const formik = useFormik({
    initialValues: values,
    // validationSchema: addMovieShema,
    onSubmit: (values) => {
      //   mutateFunction();
      // formik.resetForm();
      console.log(values);
    },
  });

  const { data, loading: postLoading } = useQuery(getActorData, {
    variables: {
        name : "randa"
    },
    
  });

const test = ()=>{console.log(data)}


  return (
    <>
      <Grid item xs={4}>
        <TextFildWithBtn label="Cast" name="cast"  formik={formik} />
      </Grid>
     {test() }
      <Grid item xs={8}>
        <ChipsArea />
      </Grid>
    </>
  );
};

export default AddCast;
