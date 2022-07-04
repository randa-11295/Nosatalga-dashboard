import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextCustomInpute from "../Inputs/TextCustomInput";
import UploadButtons from "../Inputs/UplodeInput";
import ChipsArea from "../Movie/ChipsArea";
import LoadBtn from "../Inputs/LoadBtn";
import { useFormik } from "formik";
import RedioArea from "../Inputs/RedioArea";
// import { addMovieShema } from "../../Common/vaildation";
import Headline from "../Text/Headline";
import { v4 as uuid } from "uuid";
import AutoComplete from "../Inputs/AutoComplete";

export default function BasicGrid() {
  const values = {
    name: "",
    type: "",
    description: "",
    date: "",
    url: "",
    bannar: "",
    poster: "",
    cover: "",
    cast: [],
  };

  const formik = useFormik({
    initialValues: values,
    // validationSchema: addMovieShema,
    onSubmit: (values) => {
      console.log("submit ", values);
      formik.resetForm();
    },
  });

  const custumHandelChange = (val, key) => {
    formik.values[key] = val;
  };

  const textInput = [
    { name: "name", label: "Show Name", size: 4 },
    { name: "date", label: "Show Date", size: 4, num: true },
    { name: "url", label: "Show URL", size: 4 },
    { name: "description", label: "Media Description", size: 12, mult: true },
    { name: "bannar", label: "Bannar link", size: 4,  },
    { name: "poster", label: "Poster link", size: 4 },
  ];

  const typs = [
    { val: "MOVIE", label: "movie" },
    { val: "SONG", label: "song" },
    { val: "RARE", label: "RARE" },
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

      <Grid item xs={4}>
        <AutoComplete formik={formik} name="cast" label="Cast" select={true} />
      </Grid>

      <Grid item xs={8}>
        <ChipsArea />
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
        <LoadBtn />
      </Grid>
    </Grid>
  );
}
