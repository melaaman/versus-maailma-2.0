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
import { ShortTextProps } from "./ShortText";
import AppContainer from "../General/AppContainer";
import AppHeader from "../General/AppHeader";
import SpacerComponent from "../General/SpacerComponent";
import "./ShortTexts.scss";

type GenreItem = {
    value: string;
    name: string;
};

const genreItems: GenreItem[] = [
    {
        value: "book",
        name: "Kirjat",
    },
    {
        value: "movie",
        name: "Elokuvat",
    },
    {
        value: "tv",
        name: "Sarjat",
    },
];

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

    const renderMenuItem = (item: GenreItem) => (
        <MenuItem value={item.value}>{item.name}</MenuItem>
    );
    return (
        <AppContainer className="ShortTexts">
            <AppHeader header="Lyhyesti" />
            <SpacerComponent />
            <div className="ShortTexts-search">
                <TextField
                    className="ShortTexts-search-text"
                    label="Hae tekijä tai teos"
                    color="primary"
                    onChange={handleSearch}
                />
                <FormControl className="ShortTexts-search-text-select">
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
                        {genreItems.map(renderMenuItem)}
                    </Select>
                </FormControl>
            </div>
            <Box className="ShortTexts-results">
                <List className="ShortTexts-results-list">
                    {!isEmpty(filteredItems) &&
                        filteredItems.map((text) => (
                            <Button
                                className="ShortTexts-results-list-button"
                                onClick={() =>
                                    navigate(`/shortTexts/${text.id}`)
                                }
                                key={text.id}
                            >
                                <ListItem
                                    className="ShortTexts-results-list-item"
                                    key={text.id}
                                >
                                    {text.image && (
                                        <img
                                            src={text.image.fields.file.url}
                                            alt={text.work}
                                        />
                                    )}
                                    <ListItemText
                                        className="ShortTexts-results-list-item-text"
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
