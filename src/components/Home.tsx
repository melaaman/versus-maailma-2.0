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
            "Lizards are a widespread group of squamate reptiles, with over 6,000" +
            "species, ranging across all continents except Antarctica",
    },
    {
        id: "shortTexts",
        image: Shortly,
        content:
            "Lizards are a widespread group of squamate reptiles, with over 6,000" +
            "species, ranging across all continents except Antarctica",
    },
    {
        id: "essays",
        image: Essays,
        content:
            "Lizards are a widespread group of squamate reptiles, with over 6,000" +
            "species, ranging across all continents except Antarctica",
    },
    {
        id: "links",
        image: Links,
        content:
            "Lizards are a widespread group of squamate reptiles, with over 6,000" +
            "species, ranging across all continents except Antarctica",
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
