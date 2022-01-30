import { useNavigate } from "react-router-dom";
import { Grid, Box, Paper, Button, TextField } from "@mui/material";
import moment from "moment";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import PickersDay, { PickersDayProps } from "@mui/lab/PickersDay";
import fiLocale from "date-fns/locale/fi";
import { Entry } from "./JournalEntry";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import Philosophy from "../assets/filosofia.jpg";
import { getFormattedText } from "./TextBox";
import { StylesDictionary } from "../styles";

interface JournalProps {
    journalEntries: Entry[];
}

const grey = "#f2f2f2";

const styles: StylesDictionary = {
    container: {
        marginTop: "2em",
        display: "flex",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: grey,
        borderRadius: 0,
        boxShadow: "none",
        maxHeight: "320px",
    },
    date: {
        color: "primary",
        padding: 8,
        fontWeight: "bolder",
    },
    entryContent: {
        display: "flex",
        flexDirection: "column",
        textTransform: "none",
        lineHeight: 1.4,
        fontSize: "initial",
        alignItems: "start",
        textAlign: "start",
        overflow: "hidden",
        textOverflow: "ellipsis",
        height: "75%",
    },
    entryDescription: {
        height: "100%",
    },
    fade: {
        position: "absolute",
        bottom: "0px",
        display: "block",
        width: "100%",
        height: "50px",
        backgroundImage:
            "linear-gradient(to bottom, rgba(242, 242, 242, 0), rgba(242, 242, 242, 0.9) 100%)",
    },
    entryList: {
        alignItems: "start",
        marginTop: "5px",
        height: "75%",
        overflow: "scroll",
    },
    linkButton: {
        display: "flex",
        alignItems: "center",
        paddingRight: "25px",
        fontWeight: "bolder",
        color: "primary",
    },
    icon: {
        height: 20,
        width: 20,
        margin: "0 1em",
    },
    image: {
        width: "100%",
    },
};

const getFormattedEntryDate = (date: Date | null) =>
    date ? moment(date).format("YYYY-MM-DD") : "";

const Journal = (props: JournalProps) => {
    const navigate = useNavigate();
    const latestEntry = props.journalEntries[0];
    const isExistingEntry = (date: Date) =>
        props.journalEntries
            .map((entry) => entry.date)
            .includes(getFormattedEntryDate(date));

    const renderCustomDate = (
        day: Date,
        __: Array<Date | null>,
        pickersDayProps: PickersDayProps<Date>
    ) => {
        return (
            <PickersDay
                {...pickersDayProps}
                sx={{
                    backgroundColor: isExistingEntry(day) ? "pink" : "initial",
                }}
            />
        );
    };

    return (
        <AppContainer className="Journal">
            <AppHeader header="(Luku)päiväkirja" />
            <Grid container spacing={2} sx={styles.container}>
                <Grid item xs={12} md={8}>
                    <Box
                        sx={{
                            display: "flex",
                            "& > :not(style)": {
                                width: "100%",
                                padding: "1em",
                            },
                        }}
                    >
                        <Paper elevation={2} sx={styles.paper}>
                            <div style={styles.date}>{latestEntry.date}</div>
                            <Button
                                onClick={() =>
                                    navigate(`/journal/${latestEntry.date}`)
                                }
                                style={styles.entryContent}
                            >
                                <div style={styles.entryDescription}>
                                    {getFormattedText(latestEntry.description)}
                                </div>
                                <div style={styles.fade} />
                            </Button>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        locale={fiLocale}
                    >
                        <StaticDatePicker
                            views={["day"]}
                            displayStaticWrapperAs="desktop"
                            onChange={(newValue) =>
                                navigate(
                                    `/journal/${getFormattedEntryDate(
                                        newValue
                                    )}`
                                )
                            }
                            value=""
                            renderInput={(params) => <TextField {...params} />}
                            shouldDisableDate={(date) => !isExistingEntry(date)}
                            renderDay={renderCustomDate}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={8}>
                    <img
                        src={Philosophy}
                        alt="philosophy"
                        style={styles.image}
                    />
                </Grid>
            </Grid>
        </AppContainer>
    );
};

export default Journal;
