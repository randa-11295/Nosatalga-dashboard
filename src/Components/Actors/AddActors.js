import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LoadBtn from "../Inputs/LoadBtn";
import Headline from "../Text/Headline";
import RedioArea from "../Inputs/RedioArea";
import ChackArea from "../Inputs/CheckArea";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextCustomInpute from "../Inputs/TextCustomInput";
import { useFormik } from "formik";
import { addActorShema } from "../../Common/vaildation";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { addActorQuiery } from "../../ApolloClint/mediaQuieries";

const job = [
  { name: "ممثل", label: "actor" },
  { name: "مطرب", label: "singer" },
  { name: "مخرج", label: "director" },
  { name: "عازف", label: "musician" },
  { name: "ملحن", label: "composer" },
];

const gender = [
  { val: "male", label: "Male" },
  { val: "famale", label: "Famale " },
];

const values = {
  name: "",
  from: "",
  to: "",
  image: "",
  gender: "",
  jobs: [],
  type: "",
};

export default function AddActors() {
  
  const [isLive, setIsLive] = useState(false);

  const formik = useFormik({
    initialValues: values,
    validationSchema: addActorShema(isLive),
    onSubmit: (values) => {
      getCarrer(values.jobs, values.gender);
      mutateFunction();    
    },
  });

  let reqVal = {
    name: formik.values.name,
    from: formik.values.from.toString(),
    to: formik.values.toString(),
    type: formik.values.type,
    image: formik.values.image
  };

  const getCarrer = (jobs, gender) => {
    if (gender === "famale") {
      jobs = jobs.map((el) => `${el}ة`);
    }
    let type = jobs.join(" و ");
    custumHandelChange(type, "type");
  };

  const custumHandelChange = (val, key) => {
    formik.values[key] = val;
  };

  const repetTextInputs = () => {
    const textInput = [
      { name: "name", label: "Actor Name", size: 6 },
      { name: "image", label: "Image Date", size: 6 },
      { name: "from", label: "born", size: 3, num: true },
      { name: "to", label: "die", size: 3, num: true, disable: isLive },
    ];
    return textInput.map((el) => (
      <Grid key={el.name} item xs={el.size}>
        <TextCustomInpute
          formik={formik}
          name={el.name}
          label={el.label}
          num={el.num}
          disable={el.disable}
        />
      </Grid>
    ));
  };

  const changeLiveHanndel = () => {
    const toggelLive = !isLive;
    setIsLive(toggelLive);
    formik.values.to = "now";
  };

  const [mutateFunction, {  loading  }] = useMutation(
    addActorQuiery,
    {
      variables: {
        actorInput: reqVal,
      },
      onCompleted: (res) => {
        console.log(res);
      },
    }
  );

  return (
    <Grid component="form" onSubmit={formik.handleSubmit} container spacing={3}>
      <Grid item xs={12}>
        <Headline text="Add  Actor" />
      </Grid>
      {repetTextInputs()}

      <Grid item xs={3}>
        <FormControlLabel
          onChange={changeLiveHanndel}
          control={<Checkbox checked={isLive} value={isLive} />}
          label="still alive"
        />
      </Grid>

      <Grid item xs={12}>
        <ChackArea name="jobs" data={job} formik={formik} />
      </Grid>

      <Grid item xs={12}>
        <RedioArea name="gender" data={gender} formik={formik} />
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
        <LoadBtn loading={loading} />
      </Grid>
    </Grid>
  );
}
