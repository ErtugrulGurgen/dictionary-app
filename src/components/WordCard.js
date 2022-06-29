import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function WordCard({ word, fl, def, synonyms }) {
  const [showSynonyms, setShowSynonyms] = React.useState(true);
  const handleClick = () => {
    setShowSynonyms(!showSynonyms);
    console.log(showSynonyms);
    console.log(synonyms);
  };
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 300,
        minHeight: 300,
        maxHeight: 300,
        margin: "auto",
        backgroundColor: "wheat",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      {showSynonyms ? (
        <div>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {word}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: "5px" }} color="text.secondary">
              {fl}
            </Typography>
            <Typography variant="body2">
              {def}
              <br />
            </Typography>
          </CardContent>
          <CardActions sx={{ position: "absolute", bottom: 0 }}>
            <Button size="small" onClick={handleClick}>
              Synonyms
            </Button>
          </CardActions>
        </div>
      ) : (
        <div>
          {synonyms.length !== 0 ? (
            <CardContent>
              <Typography
                sx={{ fontSize: 14, display: "flex-wrap" }}
                color="text.secondary"
                gutterBottom
              >
                {synonyms?.map((item, index) => (
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    - {item}
                  </Typography>
                ))}
              </Typography>
            </CardContent>
          ) : (
            <CardContent>
              <Typography
                sx={{ fontSize: 14, display: "space-between" }}
                color="text.secondary"
                gutterBottom
              >
                <Typography sx={{ mb: "10px" }} color="text.secondary">
                  No synonyms found.
                </Typography>
              </Typography>
            </CardContent>
          )}
          <CardActions sx={{ position: "absolute", bottom: 0 }}>
            <Button size="small" onClick={handleClick}>
              Definition
            </Button>
          </CardActions>
        </div>
      )}
    </Card>
  );
}
