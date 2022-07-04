// import { TextField } from "@mui/material";
// import MenuItem from "@mui/material/MenuItem";
// import { v4 as uuidv4 } from "uuid";

// const SelectInput = (props) => {

//   const optionsReapet = () => {
//     if (props.select) {
//       return test.map((option) => (
//         <MenuItem key={uuidv4()} value={option.val}>
//           {option}
//         </MenuItem>
//       ));
//     }
//   };

//   const test = [1, 2, 3];
//   return (
//     <TextField
//       fullWidth
//       value={test[1]}
//       onChange={props.formik.handleChange}
//       // onBlur={props.formik.handleBlur}
//       // error={props.formik.touched[props.name] && Boolean(props.formik.errors[props.name])}
//       // helperText={(props.formik.touched[props.name] && props.formik.errors[props.name]) || " "}
//       name={props.name}
//       label={props.label}
//       select={props.select}
//     >
//       {optionsReapet()}
//     </TextField>
//   );
// };

// export default SelectInput;
import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function SelectTextFields() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <TextField
      fullWidth
      id="outlined-select-currency"
      select
      label="Select"
      value={currency}
      onChange={handleChange}
      helperText="Please select your currency"
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
