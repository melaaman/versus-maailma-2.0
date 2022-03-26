import { useParams } from "react-router-dom";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import TextBox, { FormattedText } from "./TextBox";

export interface Essay {
    header: string;
    description: any;
    date: string;
    bibliography: string;
    id: string;
}

export const initialEssayState = {
    header: "",
    description: "",
    date: "",
    bibliography: "",
    id: "",
};

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
