import { Box, Divider } from "@mui/material";
import { orderBy } from "lodash";
import BagendImg from "../../assets/bagend.jpg";
import { BagendEntity } from "../../data/bagend";
import AppContainer from "../General/AppContainer";
import AppHeader from "../General/AppHeader";
import TextBox from "../General/TextBox";
import "./Bagend.scss";

interface BagendProps {
    bagendItems: BagendEntity[];
}

const BagendComponent = (props: BagendProps) => {
    return (
        <AppContainer className="Bagend">
            <AppHeader header="Projekti Repunpää" />
            <div className="Bagend-description">
                <TextBox>
                    <>
                        2019 syksyllä aloin rakentamaan omaa Iisakinkirkkoani:
                        pienoismallia Repunpäästä. Miniatyyrit ja nukkekodit
                        ovat aina kiehtoneet minua, ja vihdoin elämäntilanne
                        salli tällaisen projektin aloittamisen. Ulkopuolen
                        mallina toimii kuva, jonka olen ottanut Uuden Seelannin
                        Hobittilasta. Tähän päivitän projektin edistymistä.
                    </>
                </TextBox>
                <img
                    className="Bagend-description-image"
                    src={BagendImg}
                    alt="Bagend_New_Zealand"
                />
            </div>
            <Divider />
            <Box>
                <div className="Bagend-images">
                    {orderBy(props.bagendItems, "order", "asc").map((item) => (
                        <div
                            className="Bagend-images-imageWrapper"
                            key={item.order}
                        >
                            {item.image && (
                                <img
                                    className={
                                        "Bagend-images-imageWrapper-image"
                                    }
                                    src={item.image.fields.file.url}
                                    alt={item.alt}
                                    loading="lazy"
                                />
                            )}
                            <TextBox>
                                <>{item.description}</>
                            </TextBox>
                        </div>
                    ))}
                </div>
            </Box>
        </AppContainer>
    );
};

export default BagendComponent;
