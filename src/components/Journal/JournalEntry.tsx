import { useParams } from "react-router-dom";
import { Entry } from "../../data/journal";
import AppContainer from "../General/AppContainer";
import AppHeader from "../General/AppHeader";
import { FormattedText } from "../General/TextBox";
import "./JournalEntry.scss";

interface JournalEntryProps {
    journalEntries: Entry[];
}

const JournalEntry = (props: JournalEntryProps) => {
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
                        <span className="JournalEntryComponent-content-description">
                            <FormattedText
                                description={currentEntry.description}
                            />
                        </span>
                        {currentEntry.image && (
                            <img
                                className="JournalEntryComponent-content-image"
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
