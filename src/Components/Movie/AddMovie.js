import Grid from "@mui/material/Grid";
import {  useMutation } from "@apollo/client";
import Button from "@mui/material/Button";
import TextCustomInpute from "../Inputs/TextCustomInput";
import LoadBtn from "../Inputs/LoadBtn";
import { useFormik } from "formik";
import RedioArea from "../Inputs/RedioArea";
// import { addMovieShema } from "../../Common/vaildation";
import Headline from "../Text/Headline";
import { addMovieQuiery } from "../../ApolloClint/mediaQuieries";
import AlertRun from "../Inputs/AlertRun";
import AddCast from "./AddCast";

export default function BasicGrid() {
  const values = {
    date: "123",
    panner: "https://studio.apollographql.com/sandbox/diff.png",
    poster: "https://studio.apollographql.com/sandbox/diff.jpg",
    url: "https://studio.apollographql.com/sandbox/diff/",
    // name: "ttt",
    type: "SONG",
    description: "kkkkkk",
    cast: [],
  };

  const formik = useFormik({
    initialValues: values,
    // validationSchema: addMovieShema,
    onSubmit: (values) => {
      mutateFunction();
      // formik.resetForm();
    },
  });

  const textInput = [
    { name: "name", label: "Show Name", size: 4 },
    { name: "date", label: "Show Date", size: 4, num: true },
    { name: "url", label: "Show URL", size: 4 },
    { name: "description", label: "Media Description", size: 12, mult: true },
    { name: "panner", label: "Pannar link", size: 4 },
    { name: "poster", label: "Poster link", size: 4 },
  ];

  const typs = [
    { val: "MOVIE", label: "movie" },
    { val: "SONG", label: "song" },
    { val: "RARE", label: "rare" },
  ];

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

  const [mutateFunction, { data , loading , error }] = useMutation(addMovieQuiery, {
    variables: {
      showInput: formik.values,
    } ,
      update: (proxy, result) => {
        console.log(proxy)
        console.log( formik.values)
        console.log(result);
    
    },
  });



  return (
    <Grid
      component="form"
      onSubmit={formik.handleSubmit}
      container
      columnSpacing={4}
      rowSpacing={3}
    >
      <Grid item xs={12}>
        <Headline text="Add Show" />
      </Grid>

      {repeatTextInput()}

      <Grid item xs={4}>
        <RedioArea formik={formik} name="type" data={typs} />
      </Grid>

      <AddCast />
      <Grid item xs={12}>
      <AlertRun sucsses={data} error={error} />

      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}
      >
        <Button
          color="secondary"
          variant="outlined"
          onClick={formik.resetForm}
          sx={{ mr: 3, width: "150px" }}
        >
          clear
        </Button>
        <LoadBtn loading={loading} />
      </Grid>
    </Grid>
  );
}
