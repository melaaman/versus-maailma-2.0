import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/open-sans";

import About from "./components/About";
import ShortTexts from "./components/ShortTexts";
import Essays from "./components/Essays";
import EssayComponent from "./components/Essay";
import ShortTextComponent, {
    initialShortTextState,
} from "./components/ShortText";
import Journal from "./components/Journal";
import JournalEntry, { initialEntryState } from "./components/JournalEntry";
import { initialEssayState } from "./components/Essay";
import { getContent, getItems } from "./Client";
import Home from "./components/Home";
import Links, { initialLinksState } from "./components/Links";
import NavBar from "./components/NavBar";

const StyledApp = styled.div`
    height: 100%;
    background: whitesmoke;
`;

export const primary = "#363945";
export const secondary = "#D2386C";

function App() {
    const [essays, setEssays] = useState([initialEssayState]);
    const [shortTexts, setShortTexts] = useState([initialShortTextState]);
    const [journalEntries, setJournalEntries] = useState([initialEntryState]);
    const [links, setLinks] = useState([initialLinksState]);

    useEffect(() => {
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

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: primary,
            },
            secondary: {
                main: secondary,
            },
        },
        typography: {
            fontFamily: "Open Sans",
        },
        components: {
            MuiList: {
                styleOverrides: {
                    root: {
                        backgroundColor: primary,
                        color: "aliceblue",
                    },
                },
            },
            MuiListItemText: {
                styleOverrides: {
                    primary: {
                        fontWeight: 900,
                    },
                    secondary: {
                        fontWeight: 600,
                    },
                },
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        "&::before, &::after": {
                            borderTop: `thin solid ${secondary}`,
                        },
                    },
                },
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        backgroundColor: primary,
                        fontSize: "14px",
                        padding: "1em",
                        paddingRight: 0,
                    },
                    arrow: {
                        color: primary,
                    },
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        height: "40px",
                    },
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        bottom: "24px",
                        top: "unset",
                    },
                },
            },
        },
    });

    return (
        <StyledApp className="App">
            <ThemeProvider theme={darkTheme}>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
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
        </StyledApp>
    );
}

export default App;