import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
    List,
    ListItem,
    ListItemText,
    Button,
} from "@mui/material";
import { orderBy, isEmpty } from "lodash";
import React from "react";
import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import { ShortTextProps } from "./ShortText";
import SpacerComponent from "./SpacerComponent";
import Blood from "../assets/blood.png";
import { StylesDictionary } from "../styles";
import "./ShortTexts.css";

const sx: StylesDictionary = {
    tooltip: {
        fontSize: "14px",
    },
    searchText: {
        maxWidth: "500px",
        width: "100%",
    },
    selectBox: {
        maxWidth: "250px",
        width: "100%",
    },
    resultBox: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: "3em",
    },
    button: {
        width: "100%",
    },
    list: {
        backgroundColor: "transparent",
        width: "70%",
        minWidth: "300px",
        height: "500px",
        overflow: "scroll",
        borderRadius: "4px",
        padding: 0,
    },
    listItem: {
        gap: "1em",
    },
    itemText: {
        color: "rgba(0, 0, 0, 0.6)",
    },
};

const ShortTexts = (props: ShortTextProps) => {
    const [genre, setGenre] = useState("");
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleChange = (event: SelectChangeEvent<typeof genre>) => {
        setGenre(event.target.value);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value.toLowerCase().trim());
    };

    const filteredItems = orderBy(props.shortTexts, "date", "desc").filter(
        (text) =>
            (!genre || text.genre === genre) &&
            (text.author.toLowerCase().includes(value) ||
                text.work.toLowerCase().includes(value))
    );
    return (
        <AppContainer className="ShortTexts">
            <AppHeader header="Lyhyesti" />
            <SpacerComponent />
            <div className="ShortTexts-search-banner">
                <TextField
                    label="Hae tekijä tai teos"
                    color="primary"
                    onChange={handleSearch}
                    sx={sx.searchText}
                />
                <FormControl sx={sx.selectBox}>
                    <InputLabel id="select-label">Genre</InputLabel>
                    <Select
                        labelId="select-label"
                        id="simple-select"
                        value={genre}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>Genre</em>
                        </MenuItem>
                        <MenuItem value={"book"}>Kirjat</MenuItem>
                        <MenuItem value={"movie"}>Elokuvat</MenuItem>
                        <MenuItem value={"tv"}>Sarjat</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Box
                sx={{
                    ...sx.resultBox,
                    background: `url(${Blood})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <List sx={sx.list}>
                    {!isEmpty(filteredItems) &&
                        filteredItems.map((text) => (
                            <Button
                                onClick={() =>
                                    navigate(`/shortTexts/${text.id}`)
                                }
                                key={text.id}
                                sx={sx.button}
                            >
                                <ListItem key={text.id} sx={sx.listItem}>
                                    {text.image && (
                                        <img
                                            src={text.image.fields.file.url}
                                            alt={text.work}
                                        />
                                    )}
                                    <ListItemText
                                        sx={sx.itemText}
                                        primary={text.header}
                                        secondary={
                                            <Fragment>
                                                {text.date}
                                                <br />
                                                {`${text.author}: ${text.work} (${text.yearOfPublishing})`}
                                            </Fragment>
                                        }
                                    />
                                </ListItem>
                            </Button>
                        ))}
                </List>
            </Box>
        </AppContainer>
    );
};

export default ShortTexts;
