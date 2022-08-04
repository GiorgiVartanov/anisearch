import Home from "./pages/home.page/Home.page";
import About from "./pages/about.page/About.page";
import AnimeInfo from "./pages/anime-info.page/AnimeInfo.page";
import NotFound from "./pages/not-found.page/NotFound.page";
import CharacterInfo from "./pages/character-info.page/CharacterInfo.page";
import StaffInfo from "./pages/staff-info.page/StaffInfo";

import Search from "./pages/search.page/Search.page";

import NavBar from "./components/header/nav-bar.component/NavBar";
import Footer from "./components/footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient } from "@apollo/client";

import { cache } from "./cache";

const client = new ApolloClient({
    uri: "https://graphql.anilist.co",
    cache,
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route
                        path="/animeinfo/:type/:id"
                        element={<AnimeInfo />}
                    /> */}
                    <Route path="/:type/:id" element={<AnimeInfo />} />
                    <Route path="/character/:id" element={<CharacterInfo />} />
                    <Route path="/staff/:id" element={<StaffInfo />} />
                    <Route path="/search" element={<Search />} />
                    <Route
                        path="/search/:genre/:type/:year/:season/:sort"
                        element={<Search />}
                    />
                    <Route path="/search/:sortParam" element={<Search />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </ApolloProvider>
    );
}

export { client };
export default App;
