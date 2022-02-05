import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { StylesDictionary } from "../styles";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import TextBox, { getFormattedText } from "./TextBox";

export interface ShortText {
    id: number;
    header: string;
    description: string;
    date: string;
    work: string;
    author: string;
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
    publisher: undefined,
    yearOfPublishing: "",
    genre: "",
    image: undefined,
};

export interface ShortTextProps {
    shortTexts: ShortText[];
}

const styles = {
    date: {
        margin: "1em 0",
    },
    content: {
        display: "flex",
        justifyContent: "space-evenly",
        gap: "1em",
        p: 3,
        width: "100%",
        maxWidth: "350px",
        alignSelf: "center",
        border: "1px solid rgba(54, 57, 69, 0.14)",
        borderRadius: "4px",
    },
    image: {
        width: "10%",
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
                            <div style={styles.date}>{currentText.date}</div>
                            <Box sx={styles.content}>
                                <img
                                    src={currentText.image?.fields?.file.url}
                                    alt="icon"
                                    style={styles.image}
                                />
                                <div>
                                    {`${currentText.author}: ${currentText.work}`}
                                    <br />
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