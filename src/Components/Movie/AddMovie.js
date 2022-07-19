import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { addMovieShema } from "../../Common/vaildation";
import { addMovieQuiery } from "../../ApolloClint/mediaQuieries";
import { useContext , useState } from "react";
import DataContext from "../../Context/DataContext";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddCast from "./AddCast";
import Headline from "../Text/Headline";
import LoadBtn from "../Inputs/LoadBtn";
import RedioArea from "../Inputs/RedioArea";
import CheckArea from "../Inputs/CheckArea";
import TextCustomInpute from "../Inputs/TextCustomInput";


const values = {
  date: "",
  panner: "",
  poster: "",
  url: "",
  name: "",
  category: [],
  type: "",
  description: "",
  cast: [],
};

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

const category = [
  { name: "MOVIE", label: "movie" },
  { name: "SONG", label: "song" },
  { name: "RARE", label: "rare" },
];

export default function AddMovie() {
 const myContext = useContext(DataContext)

 const [clean , setClean] = useState(false)

  const formik = useFormik({
    initialValues: values,
    validationSchema: addMovieShema,
    onSubmit: (values) => {
      setClean(false)
      const {date  } = values
      custumHandelChange( date.toString(), 'date' )
      mutateFunction();
    },
  });

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

  const [mutateFunction, {loading }] = useMutation(
    addMovieQuiery,
    {
      variables: {
        showInput: formik.values
      },
      onCompleted: (res) => {
        setClean(true)
        formik.resetForm()
        myContext.turnOnAlart(true ,  res.createShow.name  + " add Successfully ")
      },
      onError : (err)=>{
        myContext.turnOnAlart(false , err.message )
      }   
    }
  );

  const custumHandelChange = (val, key) => {
    formik.values[key] = val;
  };

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

      <Grid item xs={12}>
        <CheckArea name="category" formik={formik} data={category} />
      </Grid>

      <AddCast
        custumHandelChange={custumHandelChange}
        name="cast"
        movieFormik={formik}
        clean={clean}
      />
      <Grid item xs={12}>
      
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
