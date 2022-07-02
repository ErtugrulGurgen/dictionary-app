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
  const [randomResult, setRandomResult] = useState();
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

  // const getRandomWord = async () => {
  //   try {
  //     const randomWord = await axios.get(randomWordApi);
  //     setWord(randomWord.data[0]);
  //     console.log(word);
  //   }
  //     catch (err) {
  //     console.log(err);
  //   }
  // };

  // const getRandomWordData = async () => {
  //   try {
  //     const randomWordData = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  //     setRandomResult(randomWordData.data);
  //     console.log(randomResult);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  useEffect(() => {
    axios
      .get(randomWordApi)
      .then((res) => {
        const data = res.data[0];
        setWord(res.data[0]);
        return data;
      })
      .then((res) =>
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${res}`)
      )
      .then((response) => {
        setRandomResult(response.data);
        console.log(response.data);
      });
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
          <>
            {randomResult === undefined ? (
              <h5>Loading...</h5>
            ) : (
              randomResult?.map((item, index) =>
                item.word === word ? (
                  <RandomWord
                    key={index}
                    word={word}
                    randomDef={item.meanings[0].definitions[0].definition}
                    randomFl={item.meanings[0].partOfSpeech}
                  />
                ) : null
              )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
