import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = (props) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const changeTerm = (e) => {
    setTerm(e.target.value);
  };

  // UseEffektni 1- ko'ri
  // useEffect(() => {
  //   console.log("UseEffektni 1- ko'rinihsi");
  // }, []);

  // UseEffektni 2-ko'rininshi
  // useEffect(() => {
  //   console.log("UseEffektni 2- ko'rinihsi");
  // });

  //
  useEffect(() => {
    // console.log("UseEffektni 3- ko'rinihsi");

    const getData = async () => {
      const data = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });
      setResults(data.data.query.search);
      // console.log(results);
      // console.log(data);
    };

    const timer = setTimeout(() => {
      if (term) {
        getData();
      } else if (!term && setResults.length) {
        setResults([]);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [term]);

  const renderInfo = () => {
    return results.map((val) => {
      return (
        <div className="ui message">
          <div className="header">{val.title}</div>
          <p dangerouslySetInnerHTML={{ __html: val.snippet }}></p>
          <a
            className="button ui green"
            href={`https://en.wikipedia.org/wiki?curid${val.page}`}
          >
            Go Page
          </a>
        </div>
      );
    });
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <h1 style={{ textAlign: "center" }}>Search Wikipedia</h1>
      <div className="ui search container">
        <div className="ui icon input" style={{ width: "100%" }}>
          <input
            onChange={changeTerm}
            value={term}
            className="prompt"
            type="text"
            placeholder="Search..."
          />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
      <div className="ui container" style={{ marginTop: "20px" }}>
        {renderInfo()}
      </div>
    </div>
  );
};

export default Search;
