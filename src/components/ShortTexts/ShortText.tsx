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

    if (!currentText) {
        return <div>Tekstiä ei löytynyt</div>;
    }

    const {
        header,
        description,
        date,
        image,
        author,
        work,
        translator,
        publisher,
        yearOfPublishing,
    } = currentText;

    return (
        <AppContainer className="ShortTextComponent">
            <AppHeader header={header} isSubheader />
            <TextBox>
                <FormattedText description={description} />
                <div className="ShortTextComponent-date">{date}</div>
                <Box className="ShortTextComponent-content">
                    <img
                        className="ShortTextComponent-image"
                        src={image?.fields?.file.url}
                        alt="icon"
                    />
                    <div>
                        {`${author}: ${work}`}
                        <br />
                        {translator && (
                            <>
                                {`${translator} (suom.)`}
                                <br />
                            </>
                        )}
                        {`${publisher || ""} (${yearOfPublishing})`}
                    </div>
                </Box>
            </TextBox>
        </AppContainer>
    );
};

export default ShortTextComponent;
