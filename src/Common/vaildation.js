import * as yup from "yup";

const stringCheck = (field , num) =>
  yup
    .string(`Enter media name ${field} `)
    .required(`${field} is required`)
    .min(num , `${field}  should be of minimum ${num} characters length`)
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ");

const dateCheck = () =>
  yup
    .number("enter the media date")
    .required(`media date is required`)
    .integer("must be integer")
    .min(1500, "must be more to 1500")
    .max(1900, "must be less to 1980");

const arrCheck = yup
  .array()
  .min(1, "you must chose more than 1")
  .max(2, "you must chose less than 3");

const imgCheck = (field) =>
  yup.mixed().test("fileType", `this ${field} is required `, function (value) {
    const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
    return SUPPORTED_FORMATS.includes(value.type);
  });

const imageURL = () => {
  const URL = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi

  return yup
    .string()
    .matches(URL,"must be a valid image url")
    .required(`media date is required`);
};

export const addMovieShema = yup.object({
  name: stringCheck("name" , 3),
  description: stringCheck("description" , 100),
  url: stringCheck("Id"),
  poster: imgCheck("bannar"),
  cover : imgCheck("cover"),
  type: stringCheck("type"),
  date: dateCheck,
  // cast : arrCheck , 
});


export const addActorShema =(isLive)=>( yup.object({
  name: stringCheck("name" , 5),
  image: imageURL("image"),
  from: dateCheck("from"),
  to: (isLive ? null : dateCheck("to")),
  gender: stringCheck("gender" , 0),
  jobs: arrCheck,
}));

export const addCastShema = yup.object({
  name: stringCheck("cast" , 3),
});