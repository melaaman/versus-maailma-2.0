import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import About from "../../assets/about.png";
import Bagend from "../../assets/bagend_logo.png";
import Essays from "../../assets/essays.png";
import Journal from "../../assets/journal.png";
import Links from "../../assets/linkkeja.png";
import Shortly from "../../assets/shortly.png";
import AppContainer from "../General/AppContainer";
import LinkCard from "../General/LinkCard";
import "./Home.scss";

const linkItems = [
    {
        id: "about",
        image: About,
        content: "Tietoa näistä nettisivuista ja niiden tekijästä.",
    },
    {
        id: "journal",
        image: Journal,
        content:
            "Jäsentymättömiä ajatuksia meneillään olevista kirjoista tai mistä vain. ",
    },
    {
        id: "shortTexts",
        image: Shortly,
        content:
            "Lyhyitä tekstejä vaikutuksen tehneistä kirjoista, elokuvista ja tv-sarjoista.",
    },
    {
        id: "essays",
        image: Essays,
        content:
            "Jäsennellympiä ja työstetympiä ajatuksia. En lupaa olla esseideni kanssa samaa mieltä.",
    },
    {
        id: "bagend",
        image: Bagend,
        content: "Repunpää rakenteilla",
    },
    {
        id: "links",
        image: Links,
        content: "Nettisivuja, joilla vierailen usein.",
    },
];

const Home = () => (
    <div>
        <AppContainer className="Home">
            <Grid container spacing={1} columns={12} className="Home-container">
                {linkItems.map((item, index) => (
                    <Grid
                        className="Home-container-list"
                        key={index}
                        item
                        md={6}
                    >
                        <Link to={item.id} className="Home-container-list-link">
                            <LinkCard {...item} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </AppContainer>
    </div>
);

export default Home;
