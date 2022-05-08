import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/open-sans";
import "@fontsource/anonymous-pro";

import About from "./components/About";
import Bagend from "./components/Bagend";
import Essays from "./components/Essays";
import EssayComponent from "./components/Essays/Essay";
import NavBar from "./components/General/NavBar";
import Home from "./components/Home";
import Journal from "./components/Journal";
import JournalEntry from "./components/Journal/JournalEntry";
import Links from "./components/Links";
import ShortTexts from "./components/ShortTexts";
import ShortTextComponent from "./components/ShortTexts/ShortText";
import { AboutEntity, initialAboutState } from "./data/about";
import { Essay, initialEssayState } from "./data/essay";
import { Entry, initialEntryState } from "./data/journal";
import { initialLinksState, Link } from "./data/link";
import { initialShortTextState, ShortText } from "./data/shortText";
export { rootStyle } from "./styles/rootStyle";

import "./App.css";
import useFetch from "./hooks/useFetch";
import { rootStyle } from "./styles/rootStyle";

const App = () => {
    const { data: about } = useFetch<AboutEntity>("about", initialAboutState);
    const { data: essays } = useFetch<Essay>("essay", initialEssayState);
    const { data: journalEntries } = useFetch<Entry>(
        "journal",
        initialEntryState
    );
    const { data: shortTexts } = useFetch<ShortText>(
        "shortText",
        initialShortTextState
    );
    const { data: links } = useFetch<Link>("link", initialLinksState);

    return (
        <div className="AppComponent">
            <ThemeProvider theme={rootStyle}>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/about"
                            element={<About about={about[0]} />}
                        />
                        <Route
                            path="/links"
                            element={<Links links={links} />}
                        />
                        <Route
                            path="/shortTexts"
                            element={<ShortTexts shortTexts={shortTexts} />}
                        />
                        <Route
                            path="/shortTexts/:id"
                            element={
                                <ShortTextComponent shortTexts={shortTexts} />
                            }
                        />
                        <Route
                            path="/essays"
                            element={<Essays essays={essays} />}
                        />
                        <Route
                            path="/essays/:id"
                            element={<EssayComponent essays={essays} />}
                        />
                        <Route
                            path="/journal"
                            element={
                                <Journal journalEntries={journalEntries} />
                            }
                        />
                        <Route
                            path="/journal/:id"
                            element={
                                <JournalEntry journalEntries={journalEntries} />
                            }
                        />
                        <Route path="/bagend" element={<Bagend />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
    );
};

export default App;
