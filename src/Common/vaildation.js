import * as yup from 'yup';

const stringCheck =(field)=>(  yup
                    .string(`Enter media name ${field} `)
                    .required(`${field} is required`)
                    .min(3, `${field}  should be of minimum 8 characters length`) )

const dateCheck =   yup
                      .number( "enter the media date")
                      .required(`media date is required`)
                      .integer('must be integer')
                      .min(1700 , "must be more or equal to 1700" )
                      .max(1900 , "must be less or equal to 1900")

export const addMovieShema = yup.object({
    name : stringCheck('name'),
    description: stringCheck('description'),
    mediaId : stringCheck('Id'),
    bannar : stringCheck('bannar'),
    cover : stringCheck('cover'),
    type : stringCheck ('type'),
    date : dateCheck,
    
  });
  