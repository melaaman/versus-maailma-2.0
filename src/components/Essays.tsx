import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { orderBy } from "lodash";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import SpacerComponent from "./SpacerComponent";
import { StylesDictionary } from "../styles";
import { Essay } from "./Essay";
import "./Essays.css";

const sx: StylesDictionary = {
    button: {
        fontSize: "1.5em",
        fontWeight: "bolder",
        color: "aliceblue",
    },
};

const Essays = ({ essays }: { essays: Essay[] }) => {
    const navigate = useNavigate();

    return (
        <AppContainer className="Essays">
            <AppHeader header="Esseitä" />
            <SpacerComponent />
            <div className="Essays-container">
                <div className="Essays-links" style={sx.links}>
                    {orderBy(essays, "date", "desc").map((essay) => (
                        <Button
                            onClick={() => navigate(`/essays/${essay.id}`)}
                            key={essay.id}
                            sx={sx.button}
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
