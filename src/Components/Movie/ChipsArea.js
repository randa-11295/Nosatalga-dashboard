import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CancelIcon from "@mui/icons-material/Cancel";
import { v4 as uuidv4 } from "uuid";

export default function ChipsArea() {
  const arr = [1, 2, 3, 4, 4, 4, 8, 7, 9];

  return (
    <Stack
      direction="row"
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}
    >
      {arr.map((item) => {
        return (
          <Chip
            key={uuidv4()}
            color="primary"
            label="Custom delete icon"
            sx={{ margin: "5px" }}
            onDelete={() => {
              console.log(item);
            }}
            deleteIcon={<CancelIcon />}
            variant="outlined"
          />
        );
      })}
    </Stack>
  );
}
