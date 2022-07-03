import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DoneIcon from '@mui/icons-material/Done';

const options = ["Option 1", "Option 2"];

export default function AutoComplete() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const onCompanyChange = (event, newValue , reason) => {
    setValue(newValue)
    if(reason === "clear")
       console.log("Are you sure to clear?"); // or you can open Dialog here
    
    //other codes go here like setting the value of input
   };

  return (
    <Autocomplete
    clearIcon={<DoneIcon sx={{fontSize :"18px"}} />}
      value={value}
      clearOnBlur={true}
      onChange={onCompanyChange}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="controllable-states-demo"
      options={options}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label="Controllable" />}
    />
  );
}
