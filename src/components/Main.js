import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import WordCard from "./WordCard";

const apiKey = "ff12b7c9-a052-43c8-ab96-fe7aec9ea3c3";

const Main = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState();
  const [word, setWord] = useState("");
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;

  const getData = async () => {
    try {
      const data = await axios.get(apiUrl);
      setResult(data.data);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    if (query) {
      getData();
    } else {
      alert("Please enter a word");
    }
  };

  return (
    <div style={{}}>
      <Navbar />
      <Box
        sx={{
          width: "50%",
          maxWidth: "100%",
          margin: "auto",
          marginTop: "2rem",
          marginBottom: "3rem",
          border: "5px solid #ccc",
          borderRadius: "10px",
          display: "flex",
        }}
      >
        <TextField
          fullWidth
          label="Enter a word"
          id="word"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Search
        </Button>
      </Box>
      <div style={{ display: "flex" }}>
        {result?.map((item, index) =>
          item.word === query.toLowerCase() ? (
            <WordCard
              key={index}
              word={item.word}
              fl={item.meanings[0].partOfSpeech}
              def={item.meanings[0].definitions[0].definition}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Main;
