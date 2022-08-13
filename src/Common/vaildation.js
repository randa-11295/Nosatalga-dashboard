import * as yup from "yup";

const stringCheck = (field, num = 0) =>
  yup
    .string(`Enter   ${field} `)
    .required(`${field} is required`)
    .min(num, `${field}  should be of minimum ${num} characters length`)
    
const IdCheck = (field , num=0) =>
  yup
    .string(`Enter   ${field} `)
    .required(`${field} is required`)
    .min(num, `${field}  should be of minimum ${num} characters length`);

const dateCheck = () =>
  yup
    .number("enter the  date")
    .required(` date is required`)
    .integer("must be integer")
    .min(1500, "must be more to 1500")
    .max(2000, "must be less to 2000");

const arrCheck = (frist, sec, action = "chose") =>
  yup
    .array()
    .min(frist, `you must chose more than ${frist} items`)
    .max(sec, `you must ${action} less than ${sec} items`);

const imgCheck = (field) =>
  yup.mixed().test("fileType", `this ${field} is required `, function (value) {
    const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
    return SUPPORTED_FORMATS.includes(value.type);
  });

const imageURL = () => {
  const URL = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;

  return yup
    .string()
    .matches(URL, "must be a valid image url")
    .required(`media date is required`);
};

export const addMovieShema = yup.object({
  name: stringCheck("name", 3),
  description: IdCheck("description", 100),
  url: IdCheck("url"),
  poster: imageURL("poster"),
  panner: imageURL("panner"),
  type: stringCheck("type"),
  category: arrCheck(2, 5),
  date: dateCheck("date"),
  cast: arrCheck(3, 10, "add"),
});

export const addActorShema = (isLive) =>
  yup.object({
    name: stringCheck("name", 5),
    image: imageURL("image"),
    from: dateCheck("from"),
    to: isLive ? null : dateCheck("to"),
    gender: stringCheck("gender", 0),
    jobs: arrCheck(1, 2),
  });

export const addCastShema = yup.object({
  name: stringCheck("cast", 3),
});
