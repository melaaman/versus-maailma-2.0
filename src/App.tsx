import { ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/open-sans";
import "@fontsource/anonymous-pro";

import { getContent, getItems } from "./Client";
import About from "./components/About";
import Essays from "./components/Essay";
import EssayComponent from "./components/Essay/Essay";
import NavBar from "./components/General/NavBar";
import Home from "./components/Home";
import Journal from "./components/Journal";
import JournalEntry from "./components/Journal/JournalEntry";
import Links from "./components/Links";
import ShortTextComponent from "./components/ShortText/ShortText";
import ShortTexts from "./components/ShortText/ShortTexts";
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
    const [shortTexts, setShortTexts] = useState([initialShortTextState]);
    const [journalEntries, setJournalEntries] = useState([initialEntryState]);
    const [links, setLinks] = useState([initialLinksState]);

    useEffect(() => {
        getContent("about").then((entries) => {
            setAbout(getItems(entries)[0]);
        });

        getContent("essay").then((entries) => {
            setEssays(getItems(entries));
        });

        getContent("shortText").then((entries) => {
            setShortTexts(getItems(entries));
        });

        getContent("journal").then((entries) => {
            setJournalEntries(getItems(entries));
        });
        getContent("link").then((entries) => {
            setLinks(getItems(entries));
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
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
    );
};

export default App;
