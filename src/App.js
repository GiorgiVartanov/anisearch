import Home from "./pages/Home.page";
import About from "./pages/About.page";
import CharacterList from "./pages/CharacterList.page";
import CharacterInfo from "./pages/CharacterInfo.page";
import MangaList from "./pages/MangaList.page";
import MangaInfo from "./pages/MangaInfo.page";
import AnimeList from "./pages/AnimeList.page";
import AnimeInfo from "./pages/AnimeInfo.page";
import NotFound from "./pages/NotFound.page";

import NavBar from "./components/header/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/characterlist" element={<CharacterList />} />
                <Route path="/characterlist/:id" element={<CharacterInfo />} />
                <Route path="/mangalist" element={<MangaList />} />
                <Route path="/mangalist/:id" element={<MangaInfo />} />
                <Route path="/animelist" element={<AnimeList />} />
                <Route path="/animelist/:id" element={<AnimeInfo />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
