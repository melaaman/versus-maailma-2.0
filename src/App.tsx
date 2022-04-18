import { ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/open-sans";
import "@fontsource/anonymous-pro";

import { getContent, getItems } from "./Client";
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
import { initialAboutState } from "./data/about";
import { initialEssayState } from "./data/essay";
import { initialEntryState } from "./data/journal";
import { initialLinksState } from "./data/link";
import { initialShortTextState } from "./data/shortText";
export { rootStyle } from "./styles/rootStyle";

import "./App.css";
import { rootStyle } from "./styles/rootStyle";

const App = () => {
    const [about, setAbout] = useState(initialAboutState);
    const [essays, setEssays] = useState([initialEssayState]);
    const [journalEntries, setJournalEntries] = useState([initialEntryState]);
    const [shortTexts, setShortTexts] = useState([initialShortTextState]);
    const [links, setLinks] = useState([initialLinksState]);

    useEffect(() => {
        getContent("about").then((data) => {
            setAbout(getItems(data)[0]);
        });

        getContent("essay").then((data) => {
            setEssays(getItems(data));
        });

        getContent("journal").then((data) => {
            setJournalEntries(getItems(data));
        });

        getContent("shortText").then((data) => {
            setShortTexts(getItems(data));
        });

        getContent("link").then((data) => {
            setLinks(getItems(data));
        });
    }, []);

    return (
        <div className="AppComponent">
            <ThemeProvider theme={rootStyle}>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/about"
                            element={<About about={about} />}
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
