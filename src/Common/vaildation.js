import * as yup from 'yup';

const stringCheck =  yup
                    .string('Enter move name ')
                    .required('Email is required')
                    .min(3, 'name  should be of minimum 8 characters length') 


export const addMovieShema = yup.object({
    name : stringCheck,
    
  });
  