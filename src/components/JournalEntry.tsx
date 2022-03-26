import { useParams } from "react-router-dom";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import { FormattedText } from "./TextBox";
import "./JournalEntry.css";

export interface Entry {
    date: string;
    description: string;
    image?: { fields: { file: { url: string } } };
}
export const initialEntryState: Entry = {
    description: "",
    date: "",
    image: undefined,
};

interface JournalProps {
    journalEntries: Entry[];
}

const JournalEntry = (props: JournalProps) => {
    const params = useParams();
    const currentEntry = props.journalEntries.find(
        (entry) => entry.date === params.id
    );

    return (
        <AppContainer className="JournalEntryComponent">
            {currentEntry && (
                <>
                    <AppHeader header={currentEntry.date} isSubheader />
                    <div className="JournalEntryComponent-content">
                        <span className="JournalEntryComponent-description">
                            <FormattedText
                                description={currentEntry.description}
                            />
                        </span>
                        {currentEntry.image && (
                            <img
                                className="JournalEntryComponent-image"
                                src={currentEntry.image.fields.file.url}
                                alt={currentEntry.date}
                            />
                        )}
                    </div>
                </>
            )}
        </AppContainer>
    );
};

export default JournalEntry;
