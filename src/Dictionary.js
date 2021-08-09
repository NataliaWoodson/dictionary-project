import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

    // api call to search for definition of word entered
  function search(event) {
    event.preventDefault()

    //documentation: https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

    // change keyword when new word is entered
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} autoFocus />
      </form>

      {/* send definitions to results component */}
      <Results results={results} />
    </div>
  );
}