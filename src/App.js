import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies/Movies";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Movie from "./components/Movie/Movie";
import Main from "./components/Main/Main";
import Genres from "./components/Genres/Genres";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main>
          <Genres />
          <Routes>
            <Route path="/genre/:id" element={<Genres />} />
            <Route path="/" element={<Movies />} />
            <Route path="/:id" element={<Movie />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
