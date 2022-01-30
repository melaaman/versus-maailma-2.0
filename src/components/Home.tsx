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
        subheader: "alaotsikko",
        image: About,
        content:
            "Lizards are a widespread group of squamate reptiles, with over 6,000" +
            "species, ranging across all continents except Antarctica",
    },
    {
        id: "journal",
        subheader: "8.1.2021",
        image: Journal,
        content:
            "Lizards are a widespread group of squamate reptiles, with over 6,000" +
            "species, ranging across all continents except Antarctica",
    },
    {
        id: "shortTexts",
        subheader: "Alaotsikko",
        image: Shortly,
        content:
            "Lizards are a widespread group of squamate reptiles, with over 6,000" +
            "species, ranging across all continents except Antarctica",
    },
    {
        id: "essays",
        subheader: "Alaotsikko",
        image: Essays,
        content:
            "Lizards are a widespread group of squamate reptiles, with over 6,000" +
            "species, ranging across all continents except Antarctica",
    },
    {
        id: "links",
        subheader: "Alaotsikko",
        image: Links,
        content:
            "Lizards are a widespread group of squamate reptiles, with over 6,000" +
            "species, ranging across all continents except Antarctica",
    },
];

const Home = () => (
    <div>
        <AppContainer className="Home">
            <Grid container spacing={1} columns={12}>
                {linkItems.map((item, index) => (
                    <Grid
                        key={index}
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "2em",
                        }}
                    >
                        <Link to={item.id} style={{ textDecoration: "none" }}>
                            <LinkCard {...item} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </AppContainer>
    </div>
);

export default Home;
