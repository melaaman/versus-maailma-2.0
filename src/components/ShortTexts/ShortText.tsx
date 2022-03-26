import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { ShortText } from "../../data/shortText";
import AppContainer from "../General/AppContainer";
import AppHeader from "../General/AppHeader";
import TextBox, { FormattedText } from "../General/TextBox";
import "./ShortText.scss";

export interface ShortTextProps {
    shortTexts: ShortText[];
}

const ShortTextComponent = (props: ShortTextProps) => {
    const params = useParams();
    const currentText = props.shortTexts.find(
        (text) => text.id.toString() === params.id
    );

    return (
        <AppContainer className="ShortTextComponent">
            {currentText && (
                <>
                    <AppHeader header={currentText.header} isSubheader />
                    <TextBox>
                        <>
                            <FormattedText
                                description={currentText.description}
                            />
                            <div className="ShortTextComponent-date">
                                {currentText.date}
                            </div>
                            <Box className="ShortTextComponent-content">
                                <img
                                    className="ShortTextComponent-image"
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
