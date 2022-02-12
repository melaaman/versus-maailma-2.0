import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import LinkCard from "./LinkCard";
import AppContainer from "./AppContainer";
import Journal from "../assets/journal.png";
import About from "../assets/about.png";
import Shortly from "../assets/shortly.png";
import Essays from "../assets/essays.png";
import Links from "../assets/linkkeja.png";

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
            "Jäsennellympiä ja työstetympiä ajatuksia. En lupaa olla esseideni kanssa enää samaa mieltä.",
    },
    {
        id: "links",
        image: Links,
        content: "Näitä suosittelen.",
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
            <Grid container spacing={1} columns={12}>
                {linkItems.map((item, index) => (
                    <Grid key={index} item xs={12} md={6} sx={styles.linkItem}>
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
