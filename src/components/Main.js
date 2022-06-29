import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import RandomWord from "./RandomWord";
import WordCard from "./WordCard";

const Main = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState();
  const [word, setWord] = useState("");
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
  const randomWordApi = "https://random-word-form.herokuapp.com/random/noun";

  const getData = async () => {
    try {
      const data = await axios.get(apiUrl);
      setResult(data.data);
      console.log(result);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const getRandomWord = async () => {
    try {
      const randomWord = await axios.get(randomWordApi);
      setWord(randomWord.data);
      console.log(word);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRandomWord();
  }, []);

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
          value={query}
          onKeyPress={(e) => (e.key === "Enter" ? handleSubmit() : null)}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Search
        </Button>
      </Box>
      <div style={{ display: "flex" }}>
        {result ? (
          result?.map((item, index) =>
            item.word === query.toLowerCase() ? (
              <WordCard
                key={index}
                word={item.word}
                fl={item.meanings[0].partOfSpeech}
                def={item.meanings[0].definitions[0].definition}
                synonyms={item.meanings[0].synonyms}
              />
            ) : null
          )
        ) : (
          <RandomWord word={word} />
        )}
      </div>
    </div>
  );
};

export default Main;
