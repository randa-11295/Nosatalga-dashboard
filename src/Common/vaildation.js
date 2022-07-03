import * as yup from "yup";

const stringCheck = (field) =>
  yup
    .string(`Enter media name ${field} `)
    .required(`${field} is required`)
    .min(3, `${field}  should be of minimum 8 characters length`);

const dateCheck = ()=>yup
  .number("enter the media date")
  .required(`media date is required`)
  .integer("must be integer")
  .min(1500, "must be more or equal to 1500")
  .max(1900, "must be less or equal to 1900");

const arrCheck = yup
  .array()
  .min(1, "you must chose more than 1")
  .max(2, "you must chose less than 3");

const imgCheck = (field) =>
  yup.mixed().test("fileType", `this ${field} is required `, function (value) {
    const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
    return SUPPORTED_FORMATS.includes(value.type);
  });

export const addMovieShema = yup.object({
  name: stringCheck("name"),
  description: stringCheck("description"),
  mediaId: stringCheck("Id"),
  bannar: imgCheck("bannar"),
  cover: imgCheck("cover"),
  type: stringCheck("type"),
  date: dateCheck,
});

export const addActorShema = yup.object({
  name: stringCheck("name"),
  type: stringCheck("type"),
  image: stringCheck("image"),
  from: dateCheck("from"),
  to: dateCheck("to"),
  gender: stringCheck("gender"),
  // job: arrCheck,
});
