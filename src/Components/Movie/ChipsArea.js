import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CancelIcon from "@mui/icons-material/Cancel";

export default function ChipsArea(props) {
  return (
    <Stack
      direction="row"
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-start" }}
    >
      {props.arr.map((item) => {
        return (
          <Chip
            key={item._id}
            color="primary"
            label={item.name}
            sx={{ margin: "5px" }}
            onDelete={() => {
              props.fun(item._id);
            }}
            deleteIcon={<CancelIcon />}
            variant="outlined"
          />
        );
      })}
    </Stack>
  );
}
