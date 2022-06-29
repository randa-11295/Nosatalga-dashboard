import Typography from "@mui/material/Typography";

export default function Headline(props) {
  const textStyle = {
    textAlign: "center",
    margin: "0 1rem 1rem",
    color: "secondary.main",
    fontSize: "3.5rem",
    textTransform: "capitalize",
  };

  return (
    <Typography variant="h1" component="h1" sx={textStyle}>
      {props.text}
    </Typography>
  );
}
