import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextCustomInpute from "../Inputs/TextCustomInput";
import LoadBtn from "../Inputs/LoadBtn";
import { useFormik } from "formik";
import Headline from "../Text/Headline";
import RedioArea from "../Inputs/RedioArea";
import ChackArea from "../Inputs/CheckArea";
import { addActorShema } from "../../Common/vaildation";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export default function AddActors() {
  const values = {
    name: "",
    from: "",
    to: "",
    workNumber : "" ,
    image: "",
    gender: "",
    jobs: [],
    type: "",
  };

  const [isLive, setIsLive] = useState(false);

  const formik = useFormik({
    initialValues: values,
    validationSchema: addActorShema(isLive),
    onSubmit: (values) => {
      getCarrer(values.jobs, values.gender);
      getSubmitData(values);
      console.log("submit ", getSubmitData(values));
      formik.resetForm();
    },
  });

  const getSubmitData = (values) => {
    let data = {
      name: values.name,
      type: values.type,
      from: values.from,
      image: values.image,
      workNumber : values.workNumber
    };
    if (isLive) {
       data = { ...data, to: values.to };
    }

    return data;
  };

  const getCarrer = (jobs, gender) => {
    if (gender === "famale") {
      jobs = jobs.map((el) => `${el}ة`);
    }

    let type = jobs.join(" و ");
    custumHandelChange(type, "type");

    console.log(type);
  };

  const custumHandelChange = (val, key) => {
    formik.values[key] = val;
  };

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

  const repetTextInputs = () => {
    const textInput = [
      { name: "name", label: "Actor Name", size: 6 },
      { name: "image", label: "Image Date", size: 6 },
      { name: "workNumber", label: "Number of work", size: 3, num: true },
      { name: "from", label: "porn", size: 3, num: true },
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
    console.log(toggelLive);
  };
  return (
    <Grid
      component="form"
      onSubmit={formik.handleSubmit}
      container
      spacing={3}
    >
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
        <LoadBtn />
      </Grid>
    </Grid>
  );
}
