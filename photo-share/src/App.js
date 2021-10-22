import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Mainboard from "./components/Mainboard";
import unsplash from "./api/unsplash";

function App() {
  const [pins, setNewPins] = useState([]);

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };

  const onSearchSubmit2 = (term) => {
    //will see what is searched in Header.js inside search bar
    console.log("on search submit", term);
    getImages(term).then((res) => {
      let results = res.data.results;
      let newPins = [...results, ...pins];

      //we don't want pins to be shuffled, use a sort function
      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    });
  };
  //after we finish [pins, setNewPins] = useState([]), we can now pass the pins as props to the Mainboard.js

  // onSearchSubmit("puppy");

  return (
    <div className="app">
      <Header onSubmit={onSearchSubmit2} />
      <Mainboard pins={pins} />
    </div>
  );
}

export default App;

{
  /* <Header loading={true} />; */
}
