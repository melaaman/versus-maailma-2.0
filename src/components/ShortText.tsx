import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import TextBox, { getFormattedText } from "./TextBox";
import BloodDeepRed from "../assets/blood_deep_red.png";
import "./ShortText.css";

export interface ShortText {
    id: number;
    header: string;
    description: string;
    date: string;
    work: string;
    author: string;
    translator?: string;
    publisher?: string;
    yearOfPublishing: string;
    genre: string;
    image?: { fields: { file: { url: string } } };
}

export const initialShortTextState: ShortText = {
    id: -1,
    header: "",
    description: "",
    date: "",
    work: "",
    author: "",
    translator: undefined,
    publisher: undefined,
    yearOfPublishing: "",
    genre: "",
    image: undefined,
};

export interface ShortTextProps {
    shortTexts: ShortText[];
}

const sx = {
    content: {
        display: "flex",
        justifyContent: "space-evenly",
        gap: "1em",
        p: 3,
        width: "100%",
        maxWidth: "400px",
        alignSelf: "center",
        border: "1px solid rgba(54, 57, 69, 0.14)",
        borderRadius: "4px",
        background: `url(${BloodDeepRed})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPositionX: "lert",
    },
};

const ShortTextComponent = (props: ShortTextProps) => {
    const params = useParams();
    const currentText = props.shortTexts.find(
        (text) => text.id.toString() === params.id
    );

    return (
        <AppContainer className="ShortTextContainer">
            {currentText && (
                <>
                    <AppHeader header={currentText.header} isSubheader />
                    <TextBox>
                        <>
                            {getFormattedText(currentText.description)}
                            <div className="ShortTextContainer-date">
                                {currentText.date}
                            </div>
                            <Box sx={sx.content}>
                                <img
                                    className="ShortTextContainer-image"
                                    src={currentText.image?.fields?.file.url}
                                    alt="icon"
                                />
                                <div>
                                    {`${currentText.author}: ${currentText.work}`}
                                    <br />
                                    {currentText.translator && (
                                        <>
                                            {`${currentText.translator} (suom.)`}
                                            <br />
                                        </>
                                    )}
                                    {`${currentText.publisher || ""} (${
                                        currentText.yearOfPublishing
                                    })`}
                                </div>
                            </Box>
                        </>
                    </TextBox>
                </>
            )}
        </AppContainer>
    );
};

export default ShortTextComponent;
