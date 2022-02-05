import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { orderBy } from "lodash";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import Writer from "../assets/writing.png";
import { StylesDictionary } from "../styles";
import { Essay } from "./Essay";

const styles: StylesDictionary = {
    container: {
        marginTop: "4em",
        background: `url(${Writer})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundColor: "rgb(17, 17, 17)",
        minHeight: "500px",
        position: "relative",
    },
    links: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        gap: "5px",
        padding: "1em",
    },
    button: {
        fontSize: "1.5em",
        fontWeight: "bolder",
        fontFamily: "monospace",
        color: "aliceblue",
    },
};

const Essays = ({ essays }: { essays: Essay[] }) => {
    const navigate = useNavigate();

    return (
        <AppContainer className="Essays">
            <AppHeader header="Esseitä" />
            <div style={styles.container}>
                <div style={styles.links}>
                    {orderBy(essays, "date", "desc").map((essay) => (
                        <Button
                            onClick={() => navigate(`/essays/${essay.id}`)}
                            key={essay.id}
                            sx={styles.button}
                        >
                            {essay.header}
                        </Button>
                    ))}
                </div>
            </div>
        </AppContainer>
    );
};

export default Essays;
