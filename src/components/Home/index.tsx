import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import About from "../../assets/about.png";
import Bagend from "../../assets/bagend_logo.png";
import Essays from "../../assets/essays.png";
import Journal from "../../assets/journal.png";
import Links from "../../assets/linkkeja.png";
import Shortly from "../../assets/shortly.png";
import AppContainer from "../General/AppContainer";
import "./Home.scss";

const linkItems = [
    {
        id: "about",
        image: About,
    },
    {
        id: "journal",
        image: Journal,
    },
    {
        id: "shortTexts",
        image: Shortly,
    },
    {
        id: "essays",
        image: Essays,
    },
    {
        id: "bagend",
        image: Bagend,
    },
    {
        id: "links",
        image: Links,
    },
];

const Home = () => (
    <div>
        <AppContainer className="Home">
            <Grid container spacing={2} columns={12} className="Home-container">
                {linkItems.map((item, index) => (
                    <Grid
                        className="Home-container-list"
                        key={index}
                        item
                        md={4}
                    >
                        <Link to={item.id} className="Home-container-list-link">
                            <img
                                className="LinkCard"
                                height="250"
                                src={item.image}
                                alt="kuku"
                            />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </AppContainer>
    </div>
);

export default Home;
