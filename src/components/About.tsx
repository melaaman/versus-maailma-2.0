import { useState, useEffect } from "react";
import { ImageList, ImageListItem } from "@mui/material";
import { getContent } from "../Client";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import FeministBooks from "../assets/feminist_books.jpg";
import KukuKone from "../assets/kuku_kone.jpeg";
import Sky from "../assets/sky.png";
import { ReactComponent as AboutIcon } from "../assets/noun-about.svg";

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
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    paddingTop: "1em",
                    flexWrap: "wrap",
                }}
            >
                <div style={{ maxWidth: "25em", paddingTop: "1em" }}>
                    {aboutPage.description}
                </div>
                <ImageList
                    variant="woven"
                    sx={{
                        width: 500,
                        height: 450,
                        padding: "1em",
                        border: "1px solid #f5426f",
                    }}
                    cols={2}
                    gap={8}
                    rowHeight={164}
                >
                    <ImageListItem>
                        <img src={FeministBooks} alt="Kuku" loading="lazy" />
                    </ImageListItem>
                    <ImageListItem>
                        <AboutIcon
                            style={{
                                backgroundColor: "#f5426f",
                                height: "80%",
                                width: "80%",
                                padding: "1em",
                                paddingRight: "1.2em",
                            }}
                        />
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
