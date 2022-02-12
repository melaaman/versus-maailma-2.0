import { useParams } from "react-router-dom";
import { StylesDictionary } from "../styles";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import { getFormattedText } from "./TextBox";
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
                            {getFormattedText(currentEntry.description)}
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
