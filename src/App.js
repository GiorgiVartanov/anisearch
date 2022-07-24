import Home from "./pages/home.page/Home.page";
import About from "./pages/about.page/About.page";
import CharacterList from "./pages/character-list.page/CharacterList.page";
import CharacterInfo from "./pages/character-info.page/CharacterInfo.page";
import MangaList from "./pages/manga-list.page/MangaList.page";
import MangaInfo from "./pages/manga-info.page/MangaInfo.page";
import AnimeList from "./pages/anime-list.page/AnimeList.page";
import AnimeInfo from "./pages/anime-info.page/AnimeInfo.page";
import NotFound from "./pages/not-found.page/NotFound.page";

import NavBar from "./components/header/nav-bar.component/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
    // to dial with the error
    typePolicies: {
        Query: {
            fields: {
                clients: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
                projects: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
            },
        },
    },
});

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
                    <Route path="/characterlist" element={<CharacterList />} />
                    <Route
                        path="/characterlist/:id"
                        element={<CharacterInfo />}
                    />
                    <Route path="/mangalist/:page" element={<MangaList />} />
                    <Route path="/mangainfo/:id" element={<MangaInfo />} />
                    <Route path="/animelist/:page" element={<AnimeList />} />
                    <Route path="/animeinfo/:id" element={<AnimeInfo />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </ApolloProvider>
    );
}

export default App;
