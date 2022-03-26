import { useParams } from "react-router-dom";
import { Essay } from "../../data/essay";
import AppContainer from "../General/AppContainer";
import AppHeader from "../General/AppHeader";
import TextBox, { FormattedText } from "../General/TextBox";

interface EssayComponentProps {
    essays: Essay[];
}

const EssayComponent = (props: EssayComponentProps) => {
    const params = useParams();
    const currentEssay = props.essays.find((essay) => essay.id === params.id);
    return (
        <AppContainer className="EssayComponent">
            {currentEssay && (
                <>
                    <AppHeader header={currentEssay.header} isSubheader />
                    <TextBox>
                        <>
                            <FormattedText
                                description={currentEssay.description}
                            />
                            <div>{currentEssay.date}</div>
                            <FormattedText
                                description={currentEssay.bibliography}
                            />
                        </>
                    </TextBox>
                </>
            )}
        </AppContainer>
    );
};

export default EssayComponent;
