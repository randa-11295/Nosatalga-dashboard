import ChipsArea from "../Movie/ChipsArea";
import Grid from "@mui/material/Grid";
import TextFildWithBtn from "../Inputs/TextFildWithBtn";
import { useFormik } from "formik";
import { useLazyQuery } from "@apollo/client";
import { getActorData } from "../../ApolloClint/mediaQuieries";
import { addCastShema } from "../../Common/vaildation";
import { useState } from "react";

const AddCast = () => {
  const [myActors, setMyActor] = useState([]);

  const values = {
    name: "",
  };

  const formik = useFormik({
    initialValues: values,
    validationSchema: addCastShema,
    onSubmit: () => {
      getActor();
    },
  });

  const [getActor, { loading, error }] = useLazyQuery(getActorData, {
    variables: {
      name: formik.values.name,
    },
    onCompleted: (res) => {
      console.log(res);
      setMyActor([...myActors, res.getActor]);
    },
  });

  const deleteActor = (id) => {
    const actors = myActors.filter((el) => el._id !== id);
    setMyActor(actors);
  };
  return (
    <>
      <Grid onSubmit={formik.handleSubmit} item xs={4}>
        <TextFildWithBtn
          loading={loading}
          label="name"
          name="name"
          formik={formik}
          err={error}
        />
      </Grid>

      <Grid item xs={8}>
        <ChipsArea fun={deleteActor} arr={myActors} />
      </Grid>
    </>
  );
};

export default AddCast;
