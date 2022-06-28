import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function WordCard({word, fl, def}) {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 300,
        minHeight: 300,
        margin: "auto",
        backgroundColor: "wheat",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {word}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {fl}
        </Typography>
        <Typography variant="body2">
          {def}
          <br />
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: "120px" }}>
        <Button size="small">Synonyms</Button>
      </CardActions>
    </Card>
  );
}
