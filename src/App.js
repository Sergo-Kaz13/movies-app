import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies/Movies";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Movie from "./components/Movie/Movie";
import Main from "./components/Main/Main";
import Genres from "./components/Genres/Genres";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Main>
          <Genres />
          <Routes>
            <Route path="/genre/:name/:id" element={<Movies />} />
            <Route path="/search/:searchValue" element={<Movies />} />
            <Route path="/" element={<Movies />} />
            <Route path="/:id" element={<Movie />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
