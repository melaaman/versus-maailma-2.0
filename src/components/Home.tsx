import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import AppContainer from "./AppContainer";
import LinkCard from "./LinkCard";
import About from "../assets/about.png";
import Essays from "../assets/essays.png";
import Journal from "../assets/journal.png";
import Links from "../assets/linkkeja.png";
import Shortly from "../assets/shortly.png";

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
        id: "links",
        image: Links,
        content: "Nettisivuja, joilla vierailen usein.",
    },
];

const styles = {
    linkItem: {
        display: "flex",
        justifyContent: "center",
        marginTop: "2em",
    },
    link: {
        textDecoration: "none",
    },
};

const Home = () => (
    <div>
        <AppContainer className="Home">
            <Grid
                container
                spacing={1}
                columns={12}
                style={{ justifyContent: "center" }}
            >
                {linkItems.map((item, index) => (
                    <Grid key={index} item md={6} sx={styles.linkItem}>
                        <Link to={item.id} style={styles.link}>
                            <LinkCard {...item} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </AppContainer>
    </div>
);

export default Home;
