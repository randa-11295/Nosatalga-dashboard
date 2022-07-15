import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { useEffect } from "react";

export default function AlertRun(props) {

  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <Collapse in={props.open}>
        <Alert severity={props.severity ? "success" : "error" }>{ props.msg}</Alert>
      </Collapse>
    </Box>
  );
}
