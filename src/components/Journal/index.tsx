import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import PickersDay, { PickersDayProps } from "@mui/lab/PickersDay";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { Grid, Box, Paper, Button, TextField } from "@mui/material";
import fiLocale from "date-fns/locale/fi";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Philosophy from "../../assets/filosofia.jpg";
import { Entry } from "../../data/journal";
import AppContainer from "../General/AppContainer";
import AppHeader from "../General/AppHeader";
import { FormattedText } from "../General/TextBox";
import "./Journal.scss";

interface JournalProps {
    journalEntries: Entry[];
}

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
            <Grid container className="Journal-container">
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
                        <Paper
                            className="Journal-container-paper"
                            elevation={2}
                        >
                            <div className="Journal-container-paper-entryDate">
                                {latestEntry.date}
                            </div>
                            <Button
                                className="Journal-container-paper-entryContent"
                                onClick={() =>
                                    navigate(`/journal/${latestEntry.date}`)
                                }
                            >
                                <div className="Journal-container-paper-entryDescription">
                                    <FormattedText
                                        description={latestEntry.description}
                                    />
                                </div>
                                <div className="fade" />
                            </Button>
                        </Paper>
                    </Box>
                </Grid>
                <Grid
                    className="Journal-container-calendar"
                    item
                    xs={12}
                    md={4}
                >
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
                        className="Journal-container-image"
                        src={Philosophy}
                        alt="philosophy"
                    />
                </Grid>
            </Grid>
        </AppContainer>
    );
};

export default Journal;
