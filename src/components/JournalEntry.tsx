import { useParams } from "react-router-dom";
import { StylesDictionary } from "../styles";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import { getFormattedText } from "./TextBox";

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

const styles: StylesDictionary = {
    content: {
        display: "flex",
        padding: "4%",
        justifyContent: "space-between",
    },
    description: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "700px",
    },
    image: {
        width: "35%",
        height: "100%",
        marginTop: "1em",
        maxWidth: "250px",
    },
};

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
                    <div style={styles.content}>
                        <span style={styles.description}>
                            {getFormattedText(currentEntry.description)}
                        </span>
                        {currentEntry.image && (
                            <img
                                src={currentEntry.image.fields.file.url}
                                alt={currentEntry.date}
                                style={styles.image}
                            />
                        )}
                    </div>
                </>
            )}
        </AppContainer>
    );
};

export default JournalEntry;
