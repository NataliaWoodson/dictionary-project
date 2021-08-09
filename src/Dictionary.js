import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault() 
    search();
  }

    // change keyword when new word is entered
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} autoFocus defaultValue={props.defaultKeyword}/>
          </form>
          <div className="hint">
            suggested words: pandemic, quarantine, wine...
          </div>
        </section>
        {/* send definitions to results component */}
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
  
}