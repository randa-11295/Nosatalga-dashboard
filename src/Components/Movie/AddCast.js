import ChipsArea from "../Movie/ChipsArea";
import Grid from "@mui/material/Grid";
import TextFildWithBtn from "../Inputs/TextFildWithBtn";
import { useFormik } from "formik";
import { useLazyQuery } from "@apollo/client";
import { getActorData } from "../../ApolloClint/mediaQuieries";
import { addCastShema } from "../../Common/vaildation";
import { useState , useContext } from "react";
import DataContext from "../../Context/DataContext";

const AddCast = (props) => {
  const [myActors, setMyActor] = useState([]);
  const [actorsIds, setActorsIds] = useState([]);
  const myContext = useContext(DataContext)

  const values = {
    name: "",
  };

  const formik = useFormik({
    initialValues: values,
    validationSchema: addCastShema,
    onSubmit: (values) => {
      const nawActor = myActors.every((el) => values.name !== el.name);
      if (nawActor) {
        getActor();
      } else {
        console.log("already added");
      }
    },
  });

  const [val, setVal] = useState();

  const makeReq = () => {
    setVal(formik.values.name);
    const nawActor = myActors.some((el) => formik.values.name === el.name);
   console.log(nawActor)
    if (!nawActor) {
      getActor();
    } else {
      myContext.turnOnAlart(false , "Already  added" )
    }
  };

  const [getActor, { loading, error }] = useLazyQuery(getActorData, {
    variables: {
      name: val,
    },

    onCompleted: (res) => {
      setMyActor([...myActors, res.getActor]);
      setActorsIds([...actorsIds, res.getActor._id]);
      formik.resetForm();
      props.custumHandelChange([...actorsIds, res.getActor._id], props.name);
  

    },
    onError : (err)=>{
      myContext.turnOnAlart(false , err.message )

    }
  });

  const deleteActor = (id) => {
    const actors = myActors.filter((el) => el._id !== id);
    const actorId = actorsIds.filter((el) => el._id !== id);

    setMyActor(actors);
    setActorsIds(actorId);

    props.custumHandelChange(actorId, props.name);
  };

  return (
    <>
      <Grid onSubmit={formik.handleSubmit} item xs={4}>
        <TextFildWithBtn
          loading={loading}
          label="Cast"
          name="name"
          formik={formik}
          parentFormik={props.movieFormik}
          fun={makeReq}
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
