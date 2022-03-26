import { ImageList, ImageListItem } from "@mui/material";
import FeministBooks from "../../assets/feminist_books.jpg";
import KukuKone from "../../assets/kuku_kone.jpeg";
import { ReactComponent as AboutIcon } from "../../assets/noun-about.svg";
import Sky from "../../assets/sky.png";
import { AboutEntity } from "../../data/about";
import AppContainer from "../AppContainer";
import AppHeader from "../AppHeader";
import SpacerComponent from "../SpacerComponent";
import { FormattedText } from "../TextBox";
import "./About.scss";

interface AboutProps {
    about: AboutEntity;
}

type ImageItem = {
    src: string;
    alt: string;
};

const About = (props: AboutProps) => {
    const { about } = props;
    return (
        <AppContainer className="About">
            <AppHeader header={about.header} />
            <SpacerComponent />
            <div className="About-container">
                <div className="About-container-description">
                    <FormattedText description={about.description} />
                </div>
                <AppImageList />
            </div>
        </AppContainer>
    );
};

const AppImageList = () => {
    const imageItems: ImageItem[] = [
        {
            src: FeministBooks,
            alt: "Feminist Books",
        },
        {
            src: Sky,
            alt: "Sky",
        },
        {
            src: KukuKone,
            alt: "Kuku Kone",
        },
    ];

    return (
        <ImageList
            className="ImageList"
            variant="woven"
            cols={2}
            gap={8}
            rowHeight={164}
        >
            {imageItems.map((imageItem) => (
                <ImageListItem key={imageItem.alt}>
                    <img src={imageItem.src} alt={imageItem.alt} />
                </ImageListItem>
            ))}
            <AboutIcon className="ImageList-icon" />
        </ImageList>
    );
};

export default About;
