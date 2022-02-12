import { orderBy } from "lodash";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import SpacerComponent from "./SpacerComponent";
import SpiderWeb from "../assets/spider-web.png";
import { StylesDictionary } from "../styles";
import "./Links.css";

export interface Link {
    link: string;
    description: string;
    orderId: number;
}

export const initialLinksState: Link = {
    link: "",
    description: "",
    orderId: -1,
};

const Links = ({ links }: { links: Link[] }) => {
    return (
        <AppContainer className="Links">
            <AppHeader header="Linkkejä" />
            <SpacerComponent />
            <div className="Links-container">
                <img
                    className="image"
                    src={SpiderWeb}
                    alt={"spiderweb"}
                    loading="lazy"
                />
                <div className="Links-list">
                    {orderBy(links, "orderId").map((link) => (
                        <div
                            className="Links-link-container"
                            key={link.orderId}
                        >
                            <a className="Links-link" href={link.link}>
                                {link.link}
                            </a>
                            <div className="Links-description">
                                {link.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AppContainer>
    );
};

export default Links;
