import { LoadingButton } from "@mui/lab";

export default function LoadBtn(props) {
  return (
    <LoadingButton
      sx={{ width: "150px" }}
      color="secondary"
      loading={props.loading}
      variant="contained"
      type="submit"
    >
      submit
    </LoadingButton>
  );
}
