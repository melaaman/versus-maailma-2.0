import { ImageList, ImageListItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import SpacerComponent from "./SpacerComponent";
import { getFormattedText } from "./TextBox";
import FeministBooks from "../assets/feminist_books.jpg";
import KukuKone from "../assets/kuku_kone.jpeg";
import { ReactComponent as AboutIcon } from "../assets/noun-about.svg";
import Sky from "../assets/sky.png";
import { getContent } from "../Client";

import "./About.scss";

interface About {
    header: string;
    description: string;
}

const AboutComponent = () => {
    const initialState: About = { header: "", description: "" };
    const [aboutPage, setAboutPage] = useState(initialState);

    useEffect(() => {
        getContent("about").then((entries) => {
            const { header, description } = entries.items[0].fields as About;
            setAboutPage({ header, description });
        });
    }, []);

    return (
        <AppContainer className="About">
            <AppHeader header={aboutPage.header} />
            <SpacerComponent />
            <div className="About-container">
                <div className="About-container-description">
                    {getFormattedText(aboutPage.description)}
                </div>
                <ImageList variant="woven" cols={2} gap={8} rowHeight={164}>
                    <ImageListItem>
                        <img
                            src={FeministBooks}
                            alt="feminism"
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <AboutIcon className="About-container-icon" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src={Sky} alt="sky" loading="lazy" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src={KukuKone} alt="Kuku" loading="lazy" />
                    </ImageListItem>
                </ImageList>
            </div>
        </AppContainer>
    );
};

export default AboutComponent;
