import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import PickersDay, { PickersDayProps } from "@mui/lab/PickersDay";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import {
    Grid,
    Box,
    Paper,
    Button,
    TextField,
    useMediaQuery,
} from "@mui/material";
import fiLocale from "date-fns/locale/fi";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import { Entry } from "./JournalEntry";
import { getFormattedText } from "./TextBox";
import Philosophy from "../assets/filosofia.jpg";
import { StylesDictionary } from "../styles";
import "./Journal.css";

interface JournalProps {
    journalEntries: Entry[];
}

const getSx = (matches: boolean): StylesDictionary => ({
    container: {
        marginTop: matches ? "2em" : "4em",
        display: "flex",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: "whitesmoke",
        borderRadius: 0,
        boxShadow: "none",
        maxHeight: "320px",
    },
    entryContent: {
        display: "flex",
        flexDirection: "column",
        textTransform: "none",
        fontSize: "initial",
        lineHeight: 1.4,
        alignItems: "start",
        textAlign: "justify",
        overflow: "hidden",
        textOverflow: "ellipsis",
        height: "75%",
        padding: 0,
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
    calendar: {
        display: "flex",
        justifyContent: "center",
        paddingLeft: "1em",
    },
});

const getFormattedEntryDate = (date: Date | null) =>
    date ? moment(date).format("YYYY-MM-DD") : "";

const Journal = (props: JournalProps) => {
    const navigate = useNavigate();
    const matches = useMediaQuery("(max-width:480px)");
    const sx: StylesDictionary = getSx(matches);
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
            <Grid container sx={sx.container}>
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
                        <Paper elevation={2} sx={sx.paper}>
                            <div className="Journal-entry-date">
                                {latestEntry.date}
                            </div>
                            <Button
                                onClick={() =>
                                    navigate(`/journal/${latestEntry.date}`)
                                }
                                sx={sx.entryContent}
                            >
                                <div className="Journal-entry-description">
                                    {getFormattedText(latestEntry.description)}
                                </div>
                                <div className="fade" />
                            </Button>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} sx={sx.calendar}>
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
                        className="Journal-image"
                        src={Philosophy}
                        alt="philosophy"
                    />
                </Grid>
            </Grid>
        </AppContainer>
    );
};

export default Journal;
