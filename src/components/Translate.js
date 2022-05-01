import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const dataDropdown = [
  { label: "Uzbek", value: "uz" },
  { label: "English", value: "en" },
  { label: "Rus", value: "ru" },
  { label: "Arabic", value: "ar" },
];

const Translate = () => {
  const [term, setTerm] = useState("");
  const [translate, setTranslate] = useState("");
  const [result, setResult] = useState("");

  const getInputData = (e) => {
    setTerm(e.target.value);
  };

  const getDropdown = (data) => {
    setTranslate(data);
  };
  console.log(translate);
  console.log(term);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: term,
            target: translate.value,
            format: "text",
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      console.log(data);
      setResult(data.data.data.translations[0].translatedText);
    };

    const timer = setTimeout(() => {
      if (term) {
        getData();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [term, translate]);

  return (
    <div>
      <div className="ui container">
        <h1>Translate App</h1>
        <form className="ui form">
          <div className="ui input focus" style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="Search..."
              style={{ width: "100%" }}
              onChange={getInputData}
            />
          </div>
        </form>
        <Dropdown data={dataDropdown} getData={getDropdown} />
        <Convert result={result} />
      </div>
    </div>
  );
};

export default Translate;
