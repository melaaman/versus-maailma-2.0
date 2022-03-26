import { Button } from "@mui/material";
import { orderBy } from "lodash";
import { useNavigate } from "react-router-dom";
import { Essay } from "../../data/essay";
import AppContainer from "../General/AppContainer";
import AppHeader from "../General/AppHeader";
import SpacerComponent from "../General/SpacerComponent";
import "./Essays.scss";

const Essays = ({ essays }: { essays: Essay[] }) => {
    const navigate = useNavigate();

    return (
        <AppContainer className="Essays">
            <AppHeader header="Esseitä" />
            <SpacerComponent />
            <div className="Essays-container">
                <div className="Essays-container-links">
                    {orderBy(essays, "date", "desc").map((essay) => (
                        <Button
                            onClick={() => navigate(`/essays/${essay.id}`)}
                            key={essay.id}
                            className="Essays-container-links-link"
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
