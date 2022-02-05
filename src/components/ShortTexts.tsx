import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Avatar,
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
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import Blood from "../assets/blood.png";
import { StylesDictionary } from "../styles";
import { ShortTextProps } from "./ShortText";

const styles: StylesDictionary = {
    tooltip: {
        fontSize: "14px",
    },
    searchBox: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "1em",
        margin: "4em 32px 1.5em 32px",
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
        marginTop: "2em",
        gap: "2em",
    },
    button: {
        width: "100%",
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
            <div className="search-banner" style={styles.searchBox}>
                <TextField
                    label="Hae tekijä tai teos"
                    color="primary"
                    onChange={handleSearch}
                    sx={styles.searchText}
                />
                <FormControl sx={styles.selectBox}>
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
            <Box sx={styles.resultBox}>
                <List
                    sx={{
                        bgcolor: "whitesmoke",
                        width: "70%",
                        minWidth: "300px",
                        height: "350px",
                        overflow: "scroll",
                        border: "1px solid rgba(54, 57, 69, 0.14)",
                        borderRadius: "4px",
                        padding: 0,
                        background: `url(${Blood})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {!isEmpty(filteredItems) &&
                        filteredItems.map((text) => (
                            <Button
                                onClick={() =>
                                    navigate(`/shortTexts/${text.id}`)
                                }
                                key={text.id}
                                sx={styles.button}
                            >
                                <ListItem key={text.id} sx={styles.listItem}>
                                    {text.image && (
                                        <img src={text.image.fields.file.url} />
                                    )}
                                    <ListItemText
                                        sx={styles.itemText}
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
