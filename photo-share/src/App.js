import "./App.css";
import Header from "./components/Header";
import Mainboard from "./components/Mainboard";
import unsplash from "./api/unsplash";

function App() {
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
    getImages(term);
  };

  // onSearchSubmit("puppy");

  return (
    <div className="app">
      <Header onSubmit={onSearchSubmit2} />
      <Mainboard />
    </div>
  );
}

export default App;

{
  /* <Header loading={true} />; */
}
